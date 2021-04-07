import styles from './styles.module.scss';
import {
    Heading,
    Row,
    HeadingRow
} from './helpers';
import {
    Modal
} from '../../../base/modal';

export function Table() {
    const table = document.createElement('table');
    const head = document.createElement('thead');
    const body = document.createElement('tbody');
    const fr = document.createDocumentFragment();

    table.classList.add('table', 'table-dark', 'table-hover', styles.table);

    head.append(HeadingRow({
        headings: [
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
                fr.append(
                    Row({
                        title: task.title,
                        description: task.description,
                        status: task.status,
                        id: task._id
                    })
                );
            });

            body.append(fr);
        });

    table.append(head, body);

    table.addEventListener("click", openTask);

    return table;
}

function openTask(e) {
    const target = e.target;
    const taskId = e.target.dataset.id;

    if (target.tagName !== 'TD') {
        return;
    }

    fetch(`http://localhost:3000/tasks/${taskId}`)
        .then(res => res.json())
        .then(task => {
            console.log(task);
            if (task) {
                console.log(task.title);
                document.body.append(Modal({
                    title: task[0].title,
                    body: task[0].description,
                    hasFooterCloseButton: true,
                }));
            }
        });
}