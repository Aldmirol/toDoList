import { Button } from '../button/components';
import { removeDatePicker, removeModal } from '../helpers';
import { closeModal } from './helpers';
import styles from './styles.module.scss';

export function Modal({
    title,
    body,
    hasFooterCloseButton,
    footerButtons = [],
    isLoginModal = false
}) {
    const modal = document.createElement('div');
    const theme = localStorage.getItem('theme');

    removeModal();
    removeDatePicker();

    if (isLoginModal) {
        if (theme === 'light') {
            modal.classList.add('modal', styles.loginModalLight, styles.show);
        } else {
            modal.classList.add('modal', styles.loginModal, styles.show);
        }    
    } else {
        modal.classList.add('modal', styles.show);
    } 

    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-labelledby', 'staticBackdropLabel');
    modal.setAttribute('aria-hidden', 'true');

    modal.append(ModalDialog({
        title,
        body,
        hasFooterCloseButton,
        footerButtons,
        isLoginModal
    }));

    return modal;
}

function ModalDialog({
    title,
    body,
    hasFooterCloseButton,
    footerButtons,
    isLoginModal
}) {
    const modalDialog = document.createElement('div');

    modalDialog.classList.add('modal-dialog', 'modal-dialog-centered');

    modalDialog.append(ModalContent({
        title,
        body,
        hasFooterCloseButton,
        footerButtons,
        isLoginModal
    }));

    return modalDialog;
}

function ModalContent({
    title,
    body,
    hasFooterCloseButton,
    footerButtons,
    isLoginModal
}) {
    const modalContent = document.createElement('div');

    modalContent.classList.add('modal-content');

    modalContent.append(ModalHeader(title, isLoginModal), ModalBody(body), ModalFooter({
        hasFooterCloseButton,
        footerButtons
    }));

    return modalContent;
}

function ModalHeader(title, isLoginModal) {
    const modalHeader = document.createElement('div');
    const theme = localStorage.getItem('theme');

    if (theme && theme === 'light') {
        modalHeader.classList.add('modal-header', styles.lightThemeMain);
    } else {
        modalHeader.classList.add('modal-header', styles.header);
    }

    if (isLoginModal) {
        modalHeader.append(ModalTitle(title));
    } else {
        modalHeader.append(ModalTitle(title), ModalCloseHeaderButton());
    }

    if (title === 'IMPORTANT') {
        modalHeader.classList.add(styles.importantStatusHeader);
    } else if (title === 'TO DO') {
        modalHeader.classList.add(styles.toDoStatusHeader);
    } else if (title === 'IN PROGRESS') {
        modalHeader.classList.add(styles.inProgressStatusHeader);
    } else if (title === 'DONE') {
        modalHeader.classList.add(styles.doneStatusHeader);
    }

    return modalHeader;
}

function ModalBody(body) {
    const modalBody = document.createElement('div');
    const theme = localStorage.getItem('theme');

    if (theme && theme === 'light') {
        modalBody.classList.add('modal-body', styles.lightThemeSecond);
    } else {
        modalBody.classList.add('modal-body', styles.body);
    }

    if (typeof body === 'string') {
        modalBody.innerHTML = body;
    } else {
        modalBody.append(body);
    }

    return modalBody;
}

function ModalFooter({
    hasFooterCloseButton,
    footerButtons
}) {
    const modalFooter = document.createElement('div');
    const theme = localStorage.getItem('theme');
    const closeButton = ModalCloseFooterButton();

    closeButton.classList.add(styles.closeButton);

    if (theme && theme === 'light') {
        modalFooter.classList.add('modal-footer', styles.lightThemeSecond);
    } else {
        modalFooter.classList.add('modal-footer', styles.footer);
    }

    if (hasFooterCloseButton) {
        modalFooter.append(closeButton);
    }

    footerButtons.forEach(btn => {
        btn.classList.add(styles.closeButton);

        return modalFooter.append(btn)
    });

    return modalFooter;
}

function ModalTitle(title) {
    const modalTitle = document.createElement('h5');

    modalTitle.classList.add('modal-title');

    modalTitle.textContent = title;

    return modalTitle;
}

function ModalCloseHeaderButton() {
    const modalCloseButton = Button({
        classList: 'close',
        clickHandler: closeModal,
    });

    return modalCloseButton;
}

function ModalCloseFooterButton() {
    const modalCloseButton = Button({
        classList: 'secondary',
        content: 'Close',
        clickHandler: closeModal,
        isModalFooterButton: true
    });

    return modalCloseButton;
}