import { Button } from "../../../../base/button";
import { editTask } from "../../../../base/CRUD/components";
import { closeModal } from "../../../../base/modal";
import { RadioButtonsGroup } from "../../../../base/radio_buttons_group";
import styles from './styles.module.scss';

export function CreateEditTaskForm({
    title = '',
    description = '',
    status = '',
    id
}) {
    const form = document.createElement('form');
    const titleInput = document.createElement('input');
    const statusList = RadioButtonsGroup({status: status});
    const descriptionTextarea = document.createElement('textarea');
    const buttonsBlock = document.createElement('div');
    const formSubmitBtn = Button({
        content: 'Save',
        type: 'submit',
    });

    titleInput.setAttribute('required', '');

    buttonsBlock.classList.add(styles.buttonsBlock)
    form.classList.add('edit-task', styles.form);
    titleInput.classList.add('form-control', 'title-input', 'm-3', 'bg-secondary', styles.title);
    statusList.classList.add(styles.status);
    descriptionTextarea.classList.add('form-control', 'description-textarea', 'm-3', 'bg-secondary', styles.description);
    formSubmitBtn.classList.add(styles.addTask);
    formSubmitBtn.setAttribute('data-id', id);

    titleInput.value = title;
    descriptionTextarea.value = description;

    buttonsBlock.append(formSubmitBtn, ModalCloseButton());

    form.append(titleInput, descriptionTextarea, statusList, buttonsBlock);

    form.addEventListener('submit', editTask);

    return form;
}

function ModalCloseButton() {
    const modalCloseButton = Button({
        classList: 'secondary',
        content: 'Close',
        clickHandler: closeModal,
    });

    modalCloseButton.classList.add(styles.closeButton)

    return modalCloseButton;
}
