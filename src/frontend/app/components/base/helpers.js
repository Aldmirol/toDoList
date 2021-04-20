import { Badge } from './badge';
import { changeStatusToDone } from './CRUD/change_status_to_done';
import { showToast } from './toast';

export function debounce(func, wait) {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function removeModal() {
    document.querySelector('.modal')?.remove();
}

export function addToast({
    titleText,
    bodyText,
    hideTime = 2000,
    type
}) {
    setTimeout(() => {
        document.querySelector('.toast-section')?.remove();
    }, hideTime);

    return showToast({
        titleText,
        bodyText,
        hideTime,
        type
    });
    
}

export function checkStatusAddBadges({
    checkTarget = '',
    id = '',
    appendTarget = ''
}) {
    if (checkTarget === 'in progress') {
        return appendTarget.append(Badge({
            title: 'in progress',
            type: 'info',
            dataId: id,
            clickHandler: changeStatusToDone
        }));
    } else if (checkTarget === 'done') {
        return appendTarget.append(Badge({
            title: 'done',
            type: 'success',
            dataId: id,
            clickHandler: changeStatusToDone
        }));
    } else if (checkTarget === 'to do') {
        return appendTarget.append(Badge({
            title: 'to do',
            type: 'primary',
            dataId: id,
            clickHandler: changeStatusToDone
        }));
    } else if (checkTarget === 'important') {
        return appendTarget.append(Badge({
            title: 'important',
            type: 'danger',
            dataId: id,
            clickHandler: changeStatusToDone
        }));
    }
}

export function changeButtonToSuccess({
    button = '',
    classList,
}) {
    const btn = button;

    btn.textContent = 'Success';
    btn.className = 'btn btn-success';

    if (classList) {
        btn.classList.add(classList);
    }
    
    return btn;
}

export function changeBadgeToSuccess({
    badge = '',
    classList
}) {
    const bdg = badge;

    bdg.innerText = 'done';

    if (classList) {
        bdg.classList.add(classList);
    }

    return bdg;
}

export function closeModalWithoutEventTarget() {
    return document.querySelector(".modal")?.remove();
}

