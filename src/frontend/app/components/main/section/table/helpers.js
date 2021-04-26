import { Button } from '../../../base/button';
import { deleteTask } from '../../../base/CRUD/components';
import { checkStatusAddBadges } from '../../../base/helpers';
import { Modal } from '../../../base/modal';
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
    dataId,
    classList
}) {
    const description = document.createElement('td');

    if(classList) {
        description.classList.add(classList);
    }

    description.setAttribute('data-id', dataId);

    if (typeof data === 'string' || typeof data === 'number' || typeof status === 'string') {
        if (classList === 'description-textarea') {
            const descriptionBlock = document.createElement('div');

            descriptionBlock.classList.add(styles.descriptionBlock);
            descriptionBlock.setAttribute('data-id', dataId);
            descriptionBlock.textContent = data;

            description.append(descriptionBlock);
        } else if (data) {
            description.innerText = data;
        } else {
            checkStatusAddBadges({
                checkTarget: status,
                appendTarget: description,
                id: dataId
            });
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

export function OpenDeleteTaskModal(e) {
    const targetId = e.target.dataset.id;
    return document.body.append(Modal({
        title: 'Are you sure?',
        body: 'Delited data cannot be recovered',
        hasFooterCloseButton: true,
        footerButtons: [Button({
            content: 'Delete',
            classList: 'danger',
            clickHandler: deleteTask,
            dataId: targetId
        })]
    }))
}

