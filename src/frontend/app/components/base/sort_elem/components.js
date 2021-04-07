import styles from './styles.module.scss';

export function SortElem(name, customClass) {
    const sortElem = document.createElement('div')
    const elemText = document.createElement('span')

    sortElem.classList.add(styles.sortElem);
    sortElem.classList.add(customClass);
    elemText.classList.add(styles.elemText);

    elemText.innerText = name;

    sortElem.append(elemText);

    return sortElem;
}