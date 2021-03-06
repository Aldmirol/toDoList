import { Button } from '../../../../base/button';
import { editTask } from '../../../../../services/components';
import { closeModal } from '../../../../base/modal';
import { RadioButtonsGroup } from '../../../../base/radio_buttons_group';
import styles from './styles.module.scss';
import $ from 'jquery';
import datepickerFactory from 'jquery-datepicker';
import datepickerJAFactory from 'jquery-datepicker/i18n/jquery.ui.datepicker-en-GB';
const datepicker = require('jquery-datepicker');

export function CreateEditTaskForm({
    title = '',
    description = '',
    status = '',
    id,
    expirationDate,
    openTaskForm = false
}) {
    const form = document.createElement('form');
    const titleInput = document.createElement('input');
    const titleLabel = document.createElement('label');
    const statusList = RadioButtonsGroup({status: status});
    const descriptionTextarea = document.createElement('textarea');
    const descriptionLabel = document.createElement('label');
    const buttonsBlock = document.createElement('div');
    const theme = localStorage.getItem('theme');
    const formSubmitBtn = Button({
        content: 'Save',
        type: 'submit',
    });
    const dateInput = document.createElement('input');
    const dateLabel = document.createElement('label');

    titleInput.setAttribute('required', '');

    buttonsBlock.classList.add(styles.buttonsBlock);
    form.classList.add('edit-task', styles.form);
    titleInput.setAttribute('name', 'title');
    titleLabel.setAttribute('for', 'title');
    titleLabel.classList.add(styles.titleLabel, 'form-label');
    descriptionTextarea.setAttribute('name', 'description');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.classList.add(styles.descriptionLabel, 'form-label');
    formSubmitBtn.classList.add(styles.addTask);
    formSubmitBtn.setAttribute('data-id', id);
    dateInput.setAttribute('id', 'edit-datepicker');
    dateLabel.classList.add('form-label');
    dateLabel.setAttribute('for', 'edit-datepicker');
    dateInput.setAttribute('autocomplete', 'off');
    dateInput.setAttribute('type', 'text');

    if (theme && theme === 'light') {
        titleInput.classList.add('form-control', 'title-input', 'mr-3', 'ml-3', 'mb-3', styles.lightTheme, styles.shadow);
        descriptionTextarea.classList.add('form-control', 'description-textarea', 'mr-3', 'ml-3', 'mb-3', styles.lightTheme, styles.shadow);
        dateInput.classList.add('form-control', 'title-input', 'mr-3', 'ml-3', 'mb-3', styles.lightTheme, styles.shadow);
        statusList.classList.add(styles.lightThemeStatus);
    } else {
        titleInput.classList.add('form-control', 'title-input', 'mr-3', 'ml-3', 'mb-3', 'bg-secondary', styles.title);
        descriptionTextarea.classList.add('form-control', 'description-textarea', 'mr-3', 'ml-3', 'mb-3', 'bg-secondary', styles.description);
        dateInput.classList.add('form-control', 'title-input', 'mr-3', 'ml-3', 'mb-3', 'bg-secondary', styles.date);
        statusList.classList.add(styles.status);
    }

    titleInput.value = title;
    descriptionTextarea.value = description;
    dateInput.value = expirationDate;
    titleLabel.textContent = 'Title';
    descriptionLabel.textContent = 'Description';
    dateLabel.textContent = 'Expiration date';

    buttonsBlock.append(formSubmitBtn, ModalCloseButton());

    if (openTaskForm) {
        titleInput.setAttribute('readonly', '');
        descriptionTextarea.setAttribute('readonly', '');
        dateInput.setAttribute('readonly', '');

        form.append(titleInput, descriptionTextarea, dateLabel, dateInput);
    } else {
        form.append(titleLabel, titleInput, descriptionLabel, descriptionTextarea, dateLabel, dateInput, statusList, buttonsBlock);

        datepickerFactory($);
        datepickerJAFactory($);
        $(function () {
            $("#edit-datepicker").datepicker({
                dateFormat: "MM d, yy",
                minDate: new Date(new Date().getTime())
            });
        });
    }

    form.addEventListener('submit', editTask);

    return form;
}

export function ModalCloseButton() {
    const modalCloseButton = Button({
        classList: 'secondary',
        content: 'Close',
        clickHandler: closeModal,
    });

    modalCloseButton.classList.add(styles.closeButton)

    return modalCloseButton;
}
