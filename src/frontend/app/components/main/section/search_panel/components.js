import styles from './styles.module.scss';
import {Button} from '../../../base/button';
import {SelectMenu} from '../../../base/select_menu';
import {SearchBarInput} from './keyword_search_bar';
import { OpenTaskModal } from './add_task_form/components';
import { openModal } from '../../../base/modal';


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
        classList: 'info',
        content: 'Add task',
        clickHandler: openModalToAddTask
    }));

    return searchPanel;
}

function openModalToAddTask() {
    openModal({
        title: 'New Task',
        body: OpenTaskModal()
    });
}