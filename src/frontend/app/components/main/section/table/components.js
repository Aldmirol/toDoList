import styles from './styles.module.scss';
import {Heading, Description, Row} from './helpers';

export function Table() {
    const table = document.createElement('table');
    const head = document.createElement('thead');
    const body = document.createElement('tbody');
    const fr = document.createDocumentFragment();
    
    table.classList.add('table', 'table-dark', 'table-hover',styles.table);

    head.append(Row({
        headings: [
            Heading('Title', 'col'), 
            Heading('Description', 'col'), 
            Heading('Status', 'col'), 
            Heading('Action', 'col'), 
            Heading('', 'col')
        ]
    }));

    fetch('http://localhost:3000/tasks').then(res => res.json()).then(tasks => {
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

    return table;
}