import { formAddTaskSelector } from "../../main/section/search_panel/add_task_form/constants";
import { Row } from "../../main/section/table/row";
import { addToast, removeModal } from "../helpers";
import { ButtonSpinner } from "../spinner/components";
import styles from './styles.module.scss';

export function addTask(e) {
    e.preventDefault();

    const btn = e.submitter;
    const form = document.querySelector(formAddTaskSelector);
    const titleInput = form.querySelector('.title-input');
    const descriptionTextarea = form.querySelector('.description-textarea');
    const title = titleInput.value;
    let status = checkStatus();
    const description = descriptionTextarea.value

    btn.innerHTML = ButtonSpinner();

    setTimeout(() => {
        fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    description: description,
                    status: status,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(task => {
                const taskRow = Row({
                    id: task._id,
                    title: task.title,
                    description: task.description,
                    status: task.status
                });
                document.querySelector('tbody').prepend(taskRow);

                btn.textContent = 'Succes';
                btn.className = 'btn btn-success';
                btn.classList.add(styles.addTask);

                setTimeout(() => {
                    addToast({
                        titleText: 'Success',
                        bodyText: 'Task succesfuly added',
                        hideTime: 2000,
                        type: 'success'
                    });

                    removeModal();
                }, 1000);
            });
    }, 1500);
}

export function deleteTask(e) {
    const tasktId = e.target.dataset.id;
    const btn = e.target;

    btn.classList.add(styles.deleteTask)
    console.log(e);
    btn.innerHTML = ButtonSpinner();

    setTimeout(() => {
        fetch(`http://localhost:3000/tasks/${tasktId}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(task => {
                btn.textContent = 'Succes';
                btn.className = 'btn btn-success';

                document.querySelector(`tr[data-id="${task}"]`)?.remove();

                setTimeout(() => {
                    removeModal();

                    addToast({
                        titleText: 'Success',
                        bodyText: 'Task successfully deleted',
                        type: 'warning'
                    });
                }, 1000);
        });
    }, 1500);
}

function checkStatus() {
    const buttons = document.getElementsByName('btnradio');

    for (let btn of buttons) {
        if (btn.checked) {
            return btn.defaultValue;
        }
    }
}