import styles from './styles.module.scss';

export function Badge(type, title) {
    const badge = document.createElement('span');

    badge.classList.add('badge');
    badge.classList.add(`bg-${type}`);
    badge.classList.add(styles.badge);

    badge.textContent = title;

    return badge;
}