import styles from './styles.module.scss';

export function Section() {
    const section = document.createElement('section');
    const text = document.createElement('span');

    section.classList.add(styles.section, 'footer-section');
    text.classList.add(styles.text);

    text.innerText = 'IT- Academy Gomel 2021';

    section.append(text);

    return section;
}