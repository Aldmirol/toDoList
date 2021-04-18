import styles from './styles.module.scss';
import {
    CustomButton
} from '../../base/custom_button';
import { SortByDate } from '../../base/CRUD/sort_by_date';

export function SidePanel() {
    const sidePanel = document.createElement('aside');
    const period = document.createElement('div');
    const importance = document.createElement('div');

    sidePanel.classList.add(styles.sidePanel);
    period.classList.add(styles.period);
    importance.classList.add(styles.importance);

    importance.append();
    period.append(
        CustomButton({
            name: 'Today',
            customClass: styles.customButton,
            clickHandler: SortByDate
        }),
        CustomButton({
            name: 'Week',
            customClass: styles.customButton,
            clickHandler: SortByDate
        }),
        CustomButton({
            name: 'Month',
            customClass: styles.customButton,
            clickHandler: SortByDate
        }),
        CustomButton({
            name: 'Year',
            customClass: styles.customButton,
            clickHandler: SortByDate
        }),
        CustomButton({
            name: 'All',
            customClass: styles.customButton,
            clickHandler: SortByDate
        })
    );
    sidePanel.append(period, importance);

    return sidePanel;
}