import {
    addToast,
    removeModal
} from "../../../../base/helpers";
import {
    ButtonSpinner
} from "../../../../base/spinner/components";
import {
    Row
} from "../../table/row";
import {
    formAddTaskSelector
} from "./constants";
import styles from "./styles.module.scss";

export function addTask(e) {
    e.preventDefault();

    const btn = e.submitter;
    const form = document.querySelector(formAddTaskSelector);
    const titleInput = form.querySelector('.title-input');
    const statusInput = form.querySelector('.status-input');
    const descriptionTextarea = form.querySelector('.description-textarea');
    const title = titleInput.value;
    const status = statusInput.value;
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

                btn.textContent = "Succes";
                btn.className = "btn btn-success";
                btn.classList.add(styles.addTask);

                setTimeout(() => {
                    removeModal();
                    addToast({
                        titleText: "Test",
                        bodyText: "Test message",
                        hideTime: 2000,
                        type: "succes"
                    });
                }, 1000);
            });
    }, 2000);
}