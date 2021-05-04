import {
    addEmptyRow,
    debounce
} from '../../../../base/helpers';
import styles from './styles.module.scss';


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

    console.log(body.childNodes);

    body.childNodes.forEach(row => {
        if (row.dataset.id !== '1') {
            const title = row.querySelector(`td[class^="title"]`);
            
            if (title.textContent.toLowerCase().includes(q.toLowerCase())) {
                row.classList.add(styles.show);
                row.classList.remove(styles.hide);
            } else {
                row.classList.add(styles.hide);
                row.classList.remove(styles.show);
            }
        }
    });

    addEmptyRow();
}