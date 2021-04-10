import { Button } from '../../../../base/button';
import { Description, OpenDeleteTaskModal } from '../helpers';
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