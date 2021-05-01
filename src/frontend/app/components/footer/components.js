import styles from './styles.module.scss';
import { Aside } from './aside';
import { Section } from './section';

export function Footer() {
    const footer = document.createElement('div');

    footer.classList.add(styles.footer);

    footer.append(Aside(), Section());

    return footer;
}