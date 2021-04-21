import moment from "../../../../../../node_modules/moment/moment.js";
import { CreateEditTaskForm } from "../../main/section/table/edit_task_form/components.js";
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

    if (target.tagName !== 'TD' && target.tagName !== 'DIV') {
        return;
    }

    fetch(`http://localhost:3000/tasks/${taskId}`)
        .then(res => res.json())
        .then(task => {
            if (task) {
                const maxDate = new Date(task[0].expirationDate);
                const deadline = moment(maxDate).format('MMMM Do YYYY');
                openModal({
                    title: task[0].status.toUpperCase(),
                    body: CreateEditTaskForm({
                        title: task[0].title,
                        description: task[0].description,
                        expirationDate: deadline,
                        openTaskForm: true
                    }),
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
    const dateInput = form.querySelector('#datepicker');
    const title = titleInput.value;
    let status = checkStatus();
    const description = descriptionTextarea.value;
    const date = moment(dateInput.value).valueOf();

    btn.innerHTML = ButtonSpinner();

    setTimeout(() => {
        fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    description: description,
                    status: status,
                    expirationDate: date,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(task => {
                const maxDate = new Date(task.expirationDate);
                const deadline = moment(maxDate).format('LL');
                
                const taskRow = Row({
                    id: task._id,
                    title: task.title,
                    description: task.description,
                    status: task.status,
                    expirationDate: deadline
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
    const dateInput = form.querySelector('#edit-datepicker');
    const date = moment(dateInput.value).valueOf();
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
                    status: status,
                    expirationDate: date,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(task => {
                const maxDate = new Date(task['$set'].expirationDate);
                const deadline = moment(maxDate).format('LL');
                const tbody = document.querySelector("tbody");
                const row = document.querySelector(`tr[data-id="${taskId}"]`);
                const title = document.querySelector(`td.title-input[data-id="${taskId}"]`);
                const description = document.querySelector(`div[class^="description"]`);
                const statusContainer = document.querySelector(`td.status[data-id="${taskId}"]`);
                const status = document.querySelector(`span.status-text[data-id="${taskId}"]`);
                const badge = document.querySelector(`span[data-id="${taskId}"]`);
                const dateInput = document.querySelector(`td.expirationDate[data-id="${taskId}"]`);

                title.textContent = task['$set'].title;
                description.textContent = task['$set'].description;
                dateInput.textContent = deadline;

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