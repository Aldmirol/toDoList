import { removeModal } from "../../../../base/helpers";
import { Row } from "../../table/row";
import {
    formAddTaskSelector
} from "./constants";

export function addTask(e) {
    const form = document.querySelector(formAddTaskSelector);
    const titleInput = form.querySelector('.title-input');
    const statusInput = form.querySelector('.status-input');
    const descriptionTextarea = form.querySelector('.description-textarea');
    const title = titleInput.value;
    const status = statusInput.value;
    const description = descriptionTextarea.value

    console.log(e);

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
            console.log(task);

            const taskRow = Row({
                id: task._id,
                title: task.title,
                description: task.description,
                status: task.status
            });

            document.querySelector('tbody').prepend(taskRow);

            removeModal();
        });
}

