import { Button } from '../../base/button';
import { openLoginFormWithAppendToRoot } from '../../login_form/helpers';
import styles from './styles.module.scss';
import { ThemeSwitcher } from './theme_switcher';

export function UserPanel() {
    const userPanel = document.createElement('div');
    const userInfo = document.createElement('span');
    const btn = Button({
        content: 'Log out',
        clickHandler: openLoginFormWithAppendToRoot
    });

    userPanel.classList.add(styles.userPanel);
    userInfo.classList.add(styles.userInfo, 'user-name-info');
    btn.classList.add(styles.button);


    userPanel.append(ThemeSwitcher(), userInfo, btn);

    return userPanel;
}