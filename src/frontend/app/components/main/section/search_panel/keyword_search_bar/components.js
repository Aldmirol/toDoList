import {
    addEmptyRow,
    debounce
} from '../../../../base/helpers';
import styles from './styles.module.scss';
import * as constants from './constants';


export function SearchBarInput() {
    const searchBarInput = document.createElement('input');
    const debounceSearch = debounce(search, 500);

    searchBarInput.classList.add('form-control');
    searchBarInput.addEventListener('keyup', debounceSearch);
    searchBarInput.setAttribute('autocomplete', 'off');

    return searchBarInput;
}

function search(e) {
    const q = e.target.value;
    const dataId = localStorage.getItem('data-id');
    const body = document.querySelector('tbody');

    body.childNodes.forEach(row => {
        if (row.dataset.id !== constants.emptyRowId) {
            const title = row.querySelector(`td[class^="title"]`);
            
            if (title.textContent.toLowerCase().includes(q.toLowerCase())) {
                row.classList.add(styles.debounceShow);
                row.classList.remove(styles.debounceHide);
            } else {
                row.classList.add(styles.debounceHide);
                row.classList.remove(styles.debounceShow);
            }
        }
    });

    addEmptyRow();
}