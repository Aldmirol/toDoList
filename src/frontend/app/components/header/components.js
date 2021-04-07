import styles from './styles.module.scss';
import {Logo} from './logo/index';
import {UserPanel} from './user_panel';

export function Header() {
    const header = document.createElement('div');

    header.classList.add(styles.header);

    header.append(Logo(), UserPanel());

    return header;
}