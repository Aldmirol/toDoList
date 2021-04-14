import { Row } from "../../main/section/table/row";
import { addToast, changeButtonToSuccess, checkStatusAddBadges, removeModal } from "../helpers";
import { openModal } from "../modal";
import { ButtonSpinner } from "../spinner/components";
import { changeStatusToDone } from "./change_status_to_done";
import { checkStatus } from "./helpers";
import styles from './styles.module.scss';

export function openTask(e) {
    const target = e.target;
    const taskId = e.target.dataset.id;

    if (target.tagName !== 'TD') {
        return;
    }

    fetch(`http://localhost:3000/tasks/${taskId}`)
        .then(res => res.json())
        .then(task => {
            console.log(task);
            if (task) {
                console.log(task.title);
                openModal({
                    title: task[0].title,
                    body: task[0].description,
                    hasFooterCloseButton: true,
                });
            }
        });
}

export function addTask(e) {
    e.preventDefault();

    const btn = e.submitter;
    const form = document.querySelector(`form.add-task`);
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

                changeButtonToSuccess({
                    button: btn,
                    classList: styles.addTask,
                })

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

export function editTask(e) {
    const taskId = e.submitter.dataset.id;
    e.preventDefault();

    const btn = e.submitter;
    const form = document.querySelector('form.edit-task');
    const titleInput = form.querySelector('.title-input');
    const descriptionTextarea = form.querySelector('.description-textarea');
    const title = titleInput.value;
    let status = checkStatus();
    const description = descriptionTextarea.value;

    btn.innerHTML = ButtonSpinner();

    setTimeout(() => {
        fetch(`http://localhost:3000/tasks/${taskId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    title: title,
                    description: description,
                    status: status
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(task => {
                const tbody = document.querySelector("tbody");
                const row = document.querySelector(`tr[data-id="${taskId}"]`);
                const title = document.querySelector(`td.title-input[data-id="${taskId}"]`);
                const description = document.querySelector(`td.description-textarea[data-id="${taskId}"]`);
                const statusContainer = document.querySelector(`td.status[data-id="${taskId}"]`);
                const status = document.querySelector(`span.status-text[data-id="${taskId}"]`);
                const badge = document.querySelector(`span[data-id="${taskId}"]`);

                title.textContent = task['$set'].title;
                description.textContent = task['$set'].description;

                status.remove();
                
                checkStatusAddBadges({
                    checkTarget: task['$set'].status,
                    appendTarget: statusContainer,
                    id: taskId,
                });

                if (task['$set'].status !== "done" && row.classList.contains("row-done-task")) {
                    row.classList.remove("row-done-task");
                    row.remove();
                    tbody.prepend(row);

                    badge.addEventListener("click", changeStatusToDone)
                }

                changeButtonToSuccess({
                    button: btn,
                    classList: styles.addTask,
                });

                setTimeout(() => {
                    addToast({
                        titleText: 'Success',
                        bodyText: 'Task succesfuly edited',
                        hideTime: 2000,
                        type: 'success'
                    });

                    removeModal();
                }, 1000);
            })
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
                
                changeButtonToSuccess({
                    button: btn,
                });

                document.querySelector(`tr[data-id="${task}"]`)?.remove();

                setTimeout(() => {
                    removeModal();

                    addToast({
                        titleText: 'Success',
                        bodyText: 'Task successfully deleted',
                        type: 'warning',
                        hideTime: 2000,
                    });
                }, 1000);
        });
    }, 1500);
}