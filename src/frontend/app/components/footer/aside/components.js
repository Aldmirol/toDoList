import styles from './styles.module.scss';
import {
    CustomButton
} from '../../base/custom_button';

export function Aside() {
    const aside = document.createElement('aside');
    const btn = CustomButton('Help', styles.help);

    aside.classList.add(styles.aside);

    aside.append();

    return aside;
}
