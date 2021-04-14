import { Button } from '../../../../base/button';
import { addTask } from '../../../../base/CRUD/components';
import { RadioButtonsGroup } from '../../../../base/radio_buttons_group';
import styles from './styles.module.scss';

export function CreateAddTaskForm() {
    const form = document.createElement('form');
    const titleInput = document.createElement('input');
    const status = RadioButtonsGroup({status: 'to do'});
    const descriptionTextarea = document.createElement('textarea');
    const theme = localStorage.getItem('theme');
    const formSubmitBtn = Button({
        content: 'Add task',
        type: 'submit',
    });

    titleInput.setAttribute('required', '');

    form.classList.add('add-task', styles.form);    
    status.classList.add(styles.status);
    formSubmitBtn.classList.add(styles.addTask);

    if (theme && theme === 'light') {
        titleInput.classList.add('form-control', 'title-input', 'm-3', styles.lightTheme);
        descriptionTextarea.classList.add('form-control', 'description-textarea', 'm-3', styles.lightTheme);
    } else {
        titleInput.classList.add('form-control', 'title-input', 'm-3', 'bg-secondary', styles.title);
        descriptionTextarea.classList.add('form-control', 'description-textarea', 'm-3', 'bg-secondary', styles.description);
    }

    titleInput.placeholder = 'Enter task title';
    descriptionTextarea.placeholder = 'Enter task description';

    form.append(titleInput, descriptionTextarea, status, formSubmitBtn);

    form.addEventListener('submit', addTask)

    return form;
}