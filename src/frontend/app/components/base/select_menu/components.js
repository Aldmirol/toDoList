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
        Option('all', 'All'),
        Option('in progress', 'In Progress', styles.inProgress),
        Option('done', 'Done', styles.done),
        Option('important', 'Important', styles.important),
        Option('to do', 'To Do', styles.toDo),
    );

    selectMenu.addEventListener("change", sortByStatus);

    return selectMenu;
}