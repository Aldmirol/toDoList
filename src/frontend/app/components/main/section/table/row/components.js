import { Description, OpenDeleteTaskModal } from '../helpers';
import { OpenEditTaskModal } from '../edit_task_form/helpers';
import styles from './styles.module.scss';
import { FontButton } from '../../../../base/font_button/components';

export function Row({
    title,
    description,
    status,
    id,
    expirationDate,
    hasDoneStatus = false,
    isEmpty = false
}) {
    const row = document.createElement('tr');

    row.classList.add(styles.row);
    row.setAttribute('data-id', id);

    if (hasDoneStatus) {
        row.classList.add('row-done-task');
    }

    if (isEmpty) {
        row.append(
            Description({
                data: '',
                classList: 'edit'
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
                data: expirationDate,
                classList: 'expirationDate',
                dataId: id,
            }),
            Description({
                data: '',
                classList: 'delete'
            })
        );
    } else {
        row.append(
            Description({
                data: [FontButton({
                    dataId: id,
                    clickHadler: OpenEditTaskModal,
                    type: 'edit',
                })],
                dataId: id,
                classList: 'edit'
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
                data: expirationDate,
                classList: 'expirationDate',
                dataId: id,
            }),
            Description({
                data: [FontButton({
                    dataId: id,
                    clickHadler: OpenDeleteTaskModal,
                    type: 'trash-alt',
                })],
                dataId: id,
                classList: 'delete'
            }),
        );
    }
    return row;
}