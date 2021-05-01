import styles from './styles.module.scss';
import { Button } from '../../../base/button';
import { SelectMenu } from '../../../base/select_menu';
import { SearchBarInput } from './keyword_search_bar';
import { CreateAddTaskForm } from './add_task_form/components';
import { openModal } from '../../../base/modal';
import { HiddenSortBlock } from './hidden_sort_block';


export function SearchPanel() {
    const searchPanel = document.createElement('div');
    const input = SearchBarInput();
    const select = SelectMenu();
    const button = Button({
        classList: 'info',
        content: 'Add task',
        clickHandler: openModalToAddTask
    });

    button.classList.add(styles.button);
    select.classList.add(styles.select);
    input.classList.add(styles.input);
    searchPanel.classList.add(styles.searchPanel);

    input.type = 'text';
    input.placeholder = 'search';

    searchPanel.append(HiddenSortBlock() ,input, select, button);

    return searchPanel;
}

function openModalToAddTask() {
    openModal({
        title: 'New Task',
        body: CreateAddTaskForm()
    });
}