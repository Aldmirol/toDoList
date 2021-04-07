import styles from './styles.module.scss';
import {SortElem} from "../../base/sort_elem";

export function Aside() {
    const aside = document.createElement('aside');

    aside.classList.add(styles.aside);

    aside.append(SortElem("Help", styles.help));

    return aside;
}