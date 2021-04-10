import styles from './styles.module.scss';

export function Toast({
    titleText = '',
    bodyText = '',
    type = 'success',
    hideTime = 2000
}) {
    const toast = document.createElement('div');
    
    toast.className = 'position-fixed bottom-0 end-0 p-3 toast-section';
    toast.classList.add(styles.toast);

    toast.append(toastElement({
        titleText,
        bodyText,
        type,
        hideTime
    }));

    return toast;
}

function toastElement({
    titleText,
    bodyText,
    type,
    hideTime,
}) {
    const toastEl = document.createElement('div')

    toastEl.className = 'toast show';
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('data-bs-delay', '500');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');
    toastEl.setAttribute('data-bs-autohide', 'true');

    if (type === 'success') {
        toastEl.classList.add(styles.toastElSucces);
    }

    toastEl.append(toastHeader(titleText), toastBody(bodyText));

    return toastEl;
}

function toastHeader(titleText) {
    const toastHeader = document.createElement('div');
    const titleEl = document.createElement('strong');

    toastHeader.className = 'toast-header text-white bg-success';
    titleEl.classList.add('me-auto');
    titleEl.textContent = titleText;

    toastHeader.append(titleEl);

    return toastHeader;
}

function toastBody(bodyText) {
    const toastBody = document.createElement('div');

    toastBody.classList.add('toast-body');
    toastBody.textContent = bodyText;

    return toastBody;
}

