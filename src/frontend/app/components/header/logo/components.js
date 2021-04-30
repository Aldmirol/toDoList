
import styles from './styles.module.scss';

export function Logo() {
    const logo = document.createElement('div');
    const logoText = document.createElement('span');

    logo.classList.add(styles.logo);
    logoText.classList.add(styles.logoText);

    logoText.innerText = 'ToDoList';

    logo.append(logoText);

    return logo;
}