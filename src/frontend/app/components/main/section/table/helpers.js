import { Badge } from '../../../base/badge';
import {
    Button
} from '../../../base/button/components';
import styles from './styles.module.scss';

export function Heading(data, scope) {
    const heading = document.createElement('th');

    heading.innerText = data;
    heading.setAttribute('scope', scope)

    return heading;
}

export function Description({
    data,
    status,
    dataId
}) {
    const description = document.createElement('td');
    description.setAttribute("data-id", dataId);

    if (typeof data === "string" || typeof status === 'string') {
        if (data) {
            description.innerText = data;
        } else {
            if (status === 'in progress') {
                description.append(Badge('info', 'in progress'));
            } else if (status === 'done') {
                description.append(Badge('success', 'done'));
            } else if (status === 'to do') {
                description.append(Badge('primary', 'to do'));
            } else if (status === 'important') {
                description.append(Badge('danger', 'important'));
            }
        }
        
    } else {
        data.forEach(el => description.append(el));
    }

    return description;
}

export function Row({
    title,
    description,
    status,
    id,
    headings
}) {
    const row = document.createElement('tr');

    row.classList.add(styles.row);

        row.append(
            Description({
                data: title,
                dataId: id
            }),
            Description({
                data: description,
                dataId: id
            }),
            Description({
                status: status,
                dataId: id
            }),
            Description({
                data: [Button({
                    classList: "danger",
                    content: "Delete",
                })],
                dataId: id
            }),
            );

return row;
}

export function HeadingRow({headings}) {
    const headingRow = document.createElement('tr');
    
    headingRow.classList.add(styles.headingRow);

    headings.forEach(heading => headingRow.append(heading));

    return headingRow;
}