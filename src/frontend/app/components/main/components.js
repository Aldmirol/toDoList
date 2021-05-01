import { SidePanel } from './side_panel';
import { Section } from './section';
import styles from './styles.module.scss'

export function Main() {
    const main = document.createElement('div');

    main.classList.add(styles.main);

    main.append(SidePanel(), Section());

    return main;
}