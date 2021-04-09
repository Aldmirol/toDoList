import styles from './styles.module.scss';
import {
    CustomButton
} from "../../base/custom_button";

export function Aside() {
    const aside = document.createElement('aside');

    aside.classList.add(styles.aside);

    aside.append(CustomButton("Help", styles.help));

    return aside;
}