import { Badge } from './badge';
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
        return appendTarget.append(Badge('info', 'in progress', id));
    } else if (checkTarget === 'done') {
        return appendTarget.append(Badge('success', 'done', id));
    } else if (checkTarget === 'to do') {
        return appendTarget.append(Badge('primary', 'to do', id));
    } else if (checkTarget === 'important') {
        return appendTarget.append(Badge('danger', 'important', id));
    }
}
