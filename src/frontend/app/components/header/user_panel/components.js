import {Button} from '../../base/button';
import styles from './styles.module.scss';
import { ThemeSwitcher } from './theme_switcher';

export function UserPanel() {
    const userPanel = document.createElement('div');
    const userInfo = document.createElement('span');
    const btn = Button({
        content: 'Log out',
    });

    userPanel.classList.add(styles.userPanel);
    userInfo.classList.add(styles.userInfo);
    btn.classList.add(styles.button);

    userInfo.innerText = 'Aliaksei';

    userPanel.append(ThemeSwitcher(), userInfo, btn);

    return userPanel;
}