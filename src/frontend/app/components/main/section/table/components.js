import styles from './styles.module.scss';
import {
    Heading,
    HeadingRow
} from './helpers';
import { Row } from './row';
import { openTask } from '../../../../services/components';
import moment from 'moment';
import { addEmptyRow } from '../../../base/helpers';

export function Table() {
    const table = document.createElement('table');
    const head = document.createElement('thead');
    const body = document.createElement('tbody');
    const allStatusExeptDoneEl = document.createDocumentFragment();
    const doneStatusEl = document.createDocumentFragment();
    const fr = document.createDocumentFragment();
    const userId = localStorage.getItem('data-id');

    table.classList.add('table', 'table-dark', 'table-hover', 'table-sm', styles.table);

    head.append(HeadingRow({
        headings: [
            Heading('', 'col'),
            Heading('Title', 'col'),
            Heading('Description', 'col'),
            Heading('Status', 'col'),
            Heading('Deadline', 'col'),
            Heading('', 'col'),
        ]
    }));

    fetch('http://localhost:3000/tasks')
        .then(res => res.json())
        .then(tasks => {
                tasks.forEach(task => {
                    const maxDate = new Date(task.expirationDate);
                    const deadline = moment(maxDate).format('LL');

                    if (task.status === 'done' && task.userId === '' + userId) {
                        doneStatusEl.append(Row({
                            title: task.title,
                            description: task.description,
                            expirationDate: deadline,
                            status: task.status,
                            id: task._id,
                            hasDoneStatus: true
                        }));
                    } else if (task.status !== 'done' && task.userId === '' + userId) {
                        allStatusExeptDoneEl.append(Row({
                            title: task.title,
                            description: task.description,
                            expirationDate: deadline,
                            status: task.status,
                            id: task._id
                        }));
                    }
                });
                
                body.append(allStatusExeptDoneEl, doneStatusEl);

                addEmptyRow();
        });

    table.append(head, body);

    table.addEventListener('dblclick', openTask);

    return table;
}
