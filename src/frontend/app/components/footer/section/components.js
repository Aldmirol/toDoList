import styles from './styles.module.scss';

export function Section() {
    const section = document.createElement('section');
    const text = document.createElement('span');

    section.classList.add(styles.section, 'footer-section');
    text.classList.add(styles.text);

    text.innerText = 'ToDoList BETA';

    section.append(text);

    return section;
}