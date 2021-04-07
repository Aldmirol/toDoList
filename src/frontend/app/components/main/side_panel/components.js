import styles from './styles.module.scss';
import {SortElem} from '../../base/sort_elem';

export function SidePanel() {
    const sidePanel = document.createElement('aside');
    const period = document.createElement('div');
    const importance = document.createElement('div');

    sidePanel.classList.add(styles.sidePanel);
    period.classList.add(styles.period);
    importance.classList.add(styles.importance);

    importance.append();
    period.append(SortElem('Today', styles.sortElem), SortElem('Week', styles.sortElem), SortElem('Month', styles.sortElem), SortElem('Year', styles.sortElem));
    sidePanel.append(period, importance);

    return sidePanel;
}