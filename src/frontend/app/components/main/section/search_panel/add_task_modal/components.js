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
        clickHandler: addTask,
    });

    form.classList.add(formAddTaskClassName, styles.form);
    titleInput.classList.add('form-control', 'title-input');
    statusInput.classList.add('form-control', 'status-input');
    descriptionTextarea.classList.add('form-control', 'description-textarea');

    titleInput.placeholder = 'Enter task title';
    statusInput.placeholder = 'Enter task status';
    descriptionTextarea.placeholder = 'Enter task description';

    form.append(titleInput, descriptionTextarea, statusInput, formSubmitBtn)

    return form;
}