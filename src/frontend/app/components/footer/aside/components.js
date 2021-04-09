import styles from './styles.module.scss';
import {
    CustomButton
} from "../../base/custom_button";
import { showToast } from '../../base/toast/helpers';

export function Aside() {
    const aside = document.createElement('aside');
    const btn = CustomButton("Help", styles.help);

    aside.classList.add(styles.aside);

    aside.append(btn);

    btn.addEventListener("click", addToast);

    return aside;
}

function addToast() {
    setTimeout(() => {
        document.querySelector(".toast-section")?.remove();
    }, 2000);

    return showToast({
        titleText: "Test",
        bodyText: "Test message",
        hideTime: 2000,
        type: "succes"
    });
    
}