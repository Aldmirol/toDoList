import styles from './styles.module.scss';
import {Button} from '../../../base/button';
import {SelectMenu} from '../../../base/select_menu';
import {SearchBarInput} from "../../../base/search_bar_input";

export function SearchPanel() {
    const searchPanel = document.createElement('div');
    const input = SearchBarInput();
    const select = SelectMenu();

    select.classList.add(styles.select);
    input.classList.add(styles.input);
    searchPanel.classList.add(styles.searchPanel);

    input.type = 'text';
    input.placeholder = 'search';

    searchPanel.append(input, select, Button({
        classList: "info",
        content: "Add task"
    }));

    return searchPanel;
}