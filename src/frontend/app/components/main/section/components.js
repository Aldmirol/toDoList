import styles from './styles.module.scss';
import { Table } from './table';
import { SearchPanel } from './search_panel';

export function Section() {
    const section = document.createElement('section');

    section.classList.add(styles.section);
    
    section.append(SearchPanel(), Table());

    return section;
}