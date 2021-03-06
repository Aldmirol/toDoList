import styles from './styles.module.scss';

export function Badge({
    type = '', 
    title = '', 
    dataId = '',
    clickHandler = function() {}
}) {
    const badge = document.createElement('span');

    badge.classList.add('badge');
    badge.classList.add(`bg-${type}`);
    badge.classList.add('status-text');
    badge.classList.add(styles.badge);

    badge.setAttribute('data-id', dataId);

    badge.textContent = title;

    badge.addEventListener('click', clickHandler)

    return badge;
}