import { Button } from '../../../../base/button';
import { Description, OpenDeleteTaskModal } from '../helpers';
import { OpenEditTaskModal } from '../edit_task_form/helpers';
import styles from './styles.module.scss';

export function Row({
    title,
    description,
    status,
    id,
}) {
    const row = document.createElement('tr');

    row.classList.add(styles.row);
    row.setAttribute('data-id', id);

    row.append(
        Description({
            data: [Button({
                classList: 'info',
                content: [`edit`],
                dataId: id,
                clickHandler: OpenEditTaskModal
            })],
            dataId: id
        }),
        Description({
            data: title,
            dataId: id,
            classList: 'title-input'
        }),
        Description({
            data: description,
            dataId: id,
            classList: 'description-textarea'
        }),
        Description({
            status: status,
            dataId: id,
            classList: 'status'
        }),
        Description({
            data: [Button({
                classList: 'danger',
                content: 'Delete',
                clickHandler: OpenDeleteTaskModal,
                dataId: id
            })],
            dataId: id
        }),
    );

    return row;
}