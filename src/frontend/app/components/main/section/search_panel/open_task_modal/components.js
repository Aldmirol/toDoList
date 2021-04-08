import { Button } from '../../../../base/button';
import { formAddTaskClassName } from './constants';
import { addTask } from './helpers';
import styles from './styles.module.scss';

export function OpenTaskModal() {
    const form = document.createElement('form');
    const titleInput = document.createElement('input');
    const statusInput = document.createElement('input');
    const descriptionTextarea = document.createElement('textarea');
    const formSubmitBtn = Button({
        content: 'Add task',
        type: "submit",
    });

    titleInput.setAttribute("required", "");
    statusInput.setAttribute("required", "");

    form.classList.add(formAddTaskClassName, styles.form);
    titleInput.classList.add('form-control', 'title-input', 'm-3', "bg-secondary", styles.title);
    statusInput.classList.add('form-control', 'status-input', 'm-3', "bg-secondary", styles.status);
    descriptionTextarea.classList.add('form-control', 'description-textarea', 'm-3', "bg-secondary", styles.description);

    titleInput.placeholder = 'Enter task title';
    statusInput.placeholder = 'Enter task status';
    descriptionTextarea.placeholder = 'Enter task description';

    form.append(titleInput, descriptionTextarea, statusInput, formSubmitBtn);

    form.addEventListener("submit", addTask)

    return form;
}