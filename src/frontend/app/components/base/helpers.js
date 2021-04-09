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
    hideTime,
    type
}) {
    setTimeout(() => {
        document.querySelector(".toast-section")?.remove();
    }, 2000);

    return showToast({
        titleText,
        bodyText,
        hideTime,
        type
    });
    
}