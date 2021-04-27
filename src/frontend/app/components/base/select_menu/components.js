import { sortByStatus } from './helpers';
import styles from './styles.module.scss';

function Option(value, title, customClass) {
    const option = document.createElement('option');

    option.classList.add(customClass);
    option.value = value;
    option.innerText = title;

    return option;
}

export function SelectMenu() {
    const selectMenu = document.createElement('select');

    selectMenu.classList.add('form-select', styles.selectMenu);

    selectMenu.append(
        Option('1', 'All'),
        Option('2', 'In Progress', styles.inProgress),
        Option('3', 'Done', styles.done),
        Option('4', 'Important', styles.important),
        Option('5', 'To Do', styles.toDo),
    );

    selectMenu.addEventListener("change", sortByStatus);

    return selectMenu;
}