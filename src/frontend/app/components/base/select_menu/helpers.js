import { addEmptyRow, deleteEmptyRow } from '../helpers';
import styles from './styles.module.scss';

export function sortByStatus(e) {
    const value = e.target.value;
    const rows = document.querySelector('tbody');

    deleteEmptyRow();
    
    rows.childNodes.forEach(row => {
        console.log(row);
        if (row.dataset.id !== '1') {
            const status = row.querySelector('.badge').textContent;

            if (status) {
                if (value === 'all' || value === status.toLowerCase()) {
                    row.classList.add(styles.show);
                    row.classList.remove(styles.hide);
                } else {
                    row.classList.add(styles.hide);
                    row.classList.remove(styles.show);
                }
            }
        }
    });

    addEmptyRow();
}