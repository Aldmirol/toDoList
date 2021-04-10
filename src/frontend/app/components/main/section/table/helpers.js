import { Badge } from '../../../base/badge';
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
    description.setAttribute('data-id', dataId);

    if (typeof data === 'string' || typeof data === 'number' || typeof status === 'string') {
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

export function HeadingRow({headings}) {
    const headingRow = document.createElement('tr');
    
    headingRow.classList.add(styles.headingRow);

    headings.forEach(heading => headingRow.append(heading));

    return headingRow;
}