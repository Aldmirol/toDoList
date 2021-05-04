import { addEmptyRow, deleteEmptyRow } from '../helpers';
import styles from './styles.module.scss';
import * as constants from './constants';
import keywordSearchStyles from '../../main/section/search_panel/keyword_search_bar/styles.module.scss';

export function sortByStatus(e) {
    const value = e.target.value;
    const rows = document.querySelector('tbody');

    deleteEmptyRow();
    
    rows.childNodes.forEach(row => {
        if (row.dataset.id !== constants.emptyRowId) {
            const status = row.querySelector('.badge').textContent;

            if (status) {
                if (value === 'all' || value === status.toLowerCase()) {
                    row.classList.remove(styles.hide);
                    row.classList.remove(keywordSearchStyles.debounceShow);
                    row.classList.add(styles.show);
                } else {
                    row.classList.remove(styles.show);
                    row.classList.remove(keywordSearchStyles.debounceShow);
                    row.classList.add(styles.hide);
                }
            }
        }
    });

    addEmptyRow();
}