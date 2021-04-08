import styles from './styles.module.scss';
import {Button} from '../../../base/button';
import {SelectMenu} from '../../../base/select_menu';
import {SearchBarInput} from "./search_bar_input";
import { Modal } from '../../../base/modal/components';
import { OpenTaskModal } from './open_task_modal/components';


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
        content: "Add task",
        clickHandler: openModalToAddTask
    }));

    return searchPanel;
}

function openModalToAddTask() {
    document.body.append(Modal({
        title: "New Task",
        body: OpenTaskModal()
    }));
}