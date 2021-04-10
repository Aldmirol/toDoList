import { Button } from '../../../../base/button';
import { addTask } from '../../../../base/CRUD/components';
import { RadioButtonsGroup } from '../../../../base/radio_buttons_group';
import { formAddTaskClassName } from './constants';
import styles from './styles.module.scss';

export function OpenTaskModal() {
    const form = document.createElement('form');
    const titleInput = document.createElement('input');
    const status = RadioButtonsGroup();
    const descriptionTextarea = document.createElement('textarea');
    const formSubmitBtn = Button({
        content: 'Add task',
        type: 'submit',
    });

    titleInput.setAttribute('required', '');

    form.classList.add(formAddTaskClassName, styles.form);
    titleInput.classList.add('form-control', 'title-input', 'm-3', 'bg-secondary', styles.title);
    status.classList.add(styles.status);
    descriptionTextarea.classList.add('form-control', 'description-textarea', 'm-3', 'bg-secondary', styles.description);
    formSubmitBtn.classList.add(styles.addTask);

    titleInput.placeholder = 'Enter task title';
    descriptionTextarea.placeholder = 'Enter task description';

    form.append(titleInput, descriptionTextarea, status, formSubmitBtn);

    form.addEventListener('submit', addTask)

    return form;
}