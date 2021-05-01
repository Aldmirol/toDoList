import { SortByDate } from '../../../../base/CRUD/sort_by_date';
import { CustomButton } from '../../../../base/custom_button';
import styles from './styles.module.scss';

export function HiddenSortBlock() {
    const hiddenSortBlock = document.createElement('div');

    hiddenSortBlock.classList.add(styles.sortBlock);

    hiddenSortBlock.append(
        CustomButton({
            name: 'Today',
            clickHandler: SortByDate,
            isHiddenBlockButton: true
        }),
        CustomButton({
            name: 'Week',
            clickHandler: SortByDate,
            isHiddenBlockButton: true
        }),
        CustomButton({
            name: 'Month',
            clickHandler: SortByDate,
            isHiddenBlockButton: true
        }),
        CustomButton({
            name: 'Year',
            clickHandler: SortByDate,
            isHiddenBlockButton: true
        }),
        CustomButton({
            name: 'All',
            clickHandler: SortByDate,
            isHiddenBlockButton: true
        })
    )

    return hiddenSortBlock;
}