import {
    addToast,
    changeBadgeToSuccess
} from "../../helpers";
import {
    ButtonSpinner
} from "../../spinner/components";
import styles from './styles.module.scss';

export function changeStatusToDone(e) {
    const taskId = e.target.dataset.id;
    const badge = e.target;
    const status = badge.textContent;

    badge.innerHTML = ButtonSpinner();


    setTimeout(() => {
        fetch(`http://localhost:3000/tasks/${taskId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    status: 'done'
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(task => {
                const doneTaskRow = document.querySelector(`tr[data-id="${taskId}"]`);
                const rowBody = document.querySelector("tbody");
                const badge = document.querySelector(`span[data-id="${taskId}"]`);
                console.log(doneTaskRow);

                changeBadgeToSuccess({
                    badge: badge,
                    classList: styles.badge
                })

                setTimeout(() => {
                    doneTaskRow.classList.add("row-done-task");

                    doneTaskRow.remove();
                    badge.removeEventListener("click", changeStatusToDone);

                    rowBody.append(doneTaskRow);
                }, 1000);

                addToast({
                    titleText: 'Success',
                    bodyText: 'Task done',
                    hideTime: 2000,
                    type: 'success'
                });
            });
    }, 1500);

    console.dir(status);
}