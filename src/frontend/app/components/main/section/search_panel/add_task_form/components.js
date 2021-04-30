import { Button } from '../../../../base/button';
import { addTask } from '../../../../base/CRUD/components';
import { RadioButtonsGroup } from '../../../../base/radio_buttons_group';
import styles from './styles.module.scss';
import $ from 'jquery';
import datepickerFactory from 'jquery-datepicker';
import datepickerJAFactory from 'jquery-datepicker/i18n/jquery.ui.datepicker-en-GB';
const datepicker = require('jquery-datepicker');

export function CreateAddTaskForm() {
    const form = document.createElement('form');
    const titleInput = document.createElement('input');
    const inputLabel = document.createElement('label');
    const dateInput = document.createElement('input');
    const dateLabel = document.createElement('label');
    const status = RadioButtonsGroup({status: 'to do'});
    const descriptionTextarea = document.createElement('textarea');
    const descriptionLabel = document.createElement('label');
    const theme = localStorage.getItem('theme');
    const formSubmitBtn = Button({
        content: 'Add task',
        type: 'submit',
    });

    titleInput.setAttribute('required', '');
    titleInput.setAttribute('autocomplete', 'off');
    form.classList.add('add-task', styles.form);    
    status.classList.add(styles.status);
    formSubmitBtn.classList.add(styles.addTask);
    inputLabel.classList.add('form-label');
    descriptionLabel.classList.add('form-label');
    dateLabel.classList.add('form-label');

    titleInput.setAttribute('id', 'title');
    descriptionTextarea.setAttribute('id', 'description');
    inputLabel.setAttribute('for', 'title');
    descriptionLabel.setAttribute('for', 'description');
    dateInput.setAttribute('id', 'datepicker');
    dateLabel.setAttribute('for', 'datepicker');
    dateInput.setAttribute('autocomplete', 'off');
    dateInput.setAttribute('type', 'text');

    inputLabel.textContent = 'Task title';
    descriptionLabel.textContent = 'Task description';
    dateLabel.textContent = 'Expiration date';

    if (theme && theme === 'light') {
        titleInput.classList.add('form-control', 'title-input', 'mr-3', 'ml-3', 'mb-3', styles.lightTheme);
        descriptionTextarea.classList.add('form-control', 'description-textarea', 'mr-3', 'ml-3', 'mb-3', styles.lightTheme);
        dateInput.classList.add('form-control', 'title-input', 'mr-3', 'ml-3', 'mb-3', styles.lightTheme);
    } else {
        titleInput.classList.add('form-control', 'title-input', 'mr-3', 'ml-3', 'mb-3', 'bg-secondary', styles.title);
        descriptionTextarea.classList.add('form-control', 'description-textarea', 'mr-3', 'ml-3', 'mb-3', 'bg-secondary', styles.description);
        dateInput.classList.add('form-control', 'title-input', 'mr-3', 'ml-3', 'mb-3', 'bg-secondary', styles.date);
    }

    titleInput.placeholder = 'Enter task title';
    descriptionTextarea.placeholder = 'Enter task description';
    dateInput.placeholder = 'Choose expiration date';

    form.append(inputLabel, titleInput, descriptionLabel, descriptionTextarea, dateLabel, dateInput, status, formSubmitBtn);

    form.addEventListener('submit', addTask)

   
    datepickerFactory($);
    datepickerJAFactory($);
    $(function () {
        $("#datepicker").datepicker({
            dateFormat: "yy-mm-dd",
            minDate: new Date(new Date().getTime())
        });
    });
    
        
    return form;
}

