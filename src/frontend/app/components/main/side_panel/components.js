import styles from './styles.module.scss';
import { CustomButton } from '../../base/custom_button';
import { SortByDate } from '../../base/CRUD/sort_by_date';

export function SidePanel() {
    const sidePanel = document.createElement('aside');
    const period = document.createElement('div');

    sidePanel.classList.add(styles.sidePanel);
    period.classList.add(styles.period);

    period.append(
        CustomButton({
            name: 'Today',
            clickHandler: SortByDate
        }),
        CustomButton({
            name: 'Week',
            clickHandler: SortByDate
        }),
        CustomButton({
            name: 'Month',
            clickHandler: SortByDate
        }),
        CustomButton({
            name: 'Year',
            clickHandler: SortByDate
        }),
        CustomButton({
            name: 'All',
            clickHandler: SortByDate,
            active: true
        })
    );
    sidePanel.append(period);

    return sidePanel;
}