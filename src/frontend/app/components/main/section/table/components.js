import styles from './styles.module.scss';
import {
    Heading,
    HeadingRow
} from './helpers';
import { Row } from './row';
import { openTask } from '../../../base/CRUD/components';

export function Table() {
    const table = document.createElement('table');
    const head = document.createElement('thead');
    const body = document.createElement('tbody');
    const allStatusExeptDoneEl = document.createDocumentFragment();
    const doneStatusEl = document.createDocumentFragment();
    const fr = document.createDocumentFragment();

    table.classList.add('table', 'table-dark', 'table-hover', 'table-sm', styles.table);

    head.append(HeadingRow({
        headings: [
            Heading('Edit', 'col'),
            Heading('Title', 'col'),
            Heading('Description', 'col'),
            Heading('Status', 'col'),
            Heading('Action', 'col'),
        ]
    }));

    fetch('http://localhost:3000/tasks')
        .then(res => res.json())
        .then(tasks => {
            tasks.forEach(task => {
                if (task.status !== "done") {
                    allStatusExeptDoneEl.append(
                        Row({
                            title: task.title,
                            description: task.description,
                            status: task.status,
                            id: task._id
                        })
                    );
                } else {
                    doneStatusEl.append(
                        Row({
                            title: task.title,
                            description: task.description,
                            status: task.status,
                            id: task._id,
                            hasDoneStatus: true
                        })
                    );
                }
            });

            body.append(allStatusExeptDoneEl, doneStatusEl);
        });

    table.append(head, body);

    table.addEventListener('click', openTask);

    return table;
}
