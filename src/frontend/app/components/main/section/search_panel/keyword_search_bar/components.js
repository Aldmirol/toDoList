import moment from 'moment';
import {
    addEmptyRow,
    debounce
} from '../../../../base/helpers';
import { Row } from '../../table/row';


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

    fetch(`http://localhost:3000/tasks?q=${q}`)
        .then(res => res.json())
        .then(tasks => {
            const body = document.querySelector('tbody');
            const allStatusExeptDoneEl = document.createDocumentFragment();
            const doneStatusEl = document.createDocumentFragment();

            tasks.filter(task => task.userId === dataId)
                .forEach(task => {
                    const maxDate = new Date(task.expirationDate);
                    const deadline = moment(maxDate).format('LL');
                    if (task.status !== 'done') {
                        allStatusExeptDoneEl.append(
                            Row({
                                title: task.title,
                                description: task.description,
                                status: task.status,
                                id: task._id,
                                expirationDate: deadline
                            })
                        );
                    } else {
                        const maxDate = new Date(task.expirationDate);
                        const deadline = moment(maxDate).format('LL');
                        doneStatusEl.append(
                            Row({
                                title: task.title,
                                description: task.description,
                                status: task.status,
                                id: task._id,
                                hasDoneStatus: true,
                                expirationDate: deadline
                            })
                        );
                    }
                })
            body.innerHTML = '';

            body.append(allStatusExeptDoneEl, doneStatusEl);

            addEmptyRow();
        });
}