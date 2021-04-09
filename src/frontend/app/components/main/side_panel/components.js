import styles from './styles.module.scss';
import {
    CustomButton
} from '../../base/custom_button';

export function SidePanel() {
    const sidePanel = document.createElement('aside');
    const period = document.createElement('div');
    const importance = document.createElement('div');

    sidePanel.classList.add(styles.sidePanel);
    period.classList.add(styles.period);
    importance.classList.add(styles.importance);

    importance.append();
    period.append(CustomButton('Today', styles.customButton), CustomButton('Week', styles.customButton), CustomButton('Month', styles.customButton), CustomButton('Year', styles.customButton));
    sidePanel.append(period, importance);

    return sidePanel;
}