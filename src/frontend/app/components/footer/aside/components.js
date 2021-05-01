import styles from './styles.module.scss';

export function Aside() {
    const aside = document.createElement('aside');

    aside.classList.add(styles.aside);

    aside.append();

    return aside;
}
