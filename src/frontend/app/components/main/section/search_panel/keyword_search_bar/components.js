import { debounce } from '../../../../base/helpers';
import { Row } from '../../table/row';


export function SearchBarInput() {
    const searchBarInput = document.createElement('input');
    const debounceSearch = debounce(search, 500);

    searchBarInput.classList.add('form-control');
    searchBarInput.addEventListener('keyup', debounceSearch);

    return searchBarInput;
}

function search(e) {
    const q = e.target.value;
    
    fetch(`http://localhost:3000/tasks?q=${q}`)
        .then(res => res.json())
        .then(tasks => {
            const body = document.querySelector('tbody');
            const fr = document.createDocumentFragment();
            const allStatusExeptDoneEl = document.createDocumentFragment();
            const doneStatusEl = document.createDocumentFragment();

            tasks.forEach(task => {
                if (task.status !== "done") {
                    allStatusExeptDoneEl.append(
                        Row({
                            title: task.title,
                            description: task.description,
                            status: task.status,
                            id: task._id
                        })
                    );
                } else {
                    doneStatusEl.append(
                        Row({
                            title: task.title,
                            description: task.description,
                            status: task.status,
                            id: task._id,
                            hasDoneStatus: true
                        })
                    );
                }
            })
            body.innerHTML = '';

            body.append(allStatusExeptDoneEl, doneStatusEl);
        });
}