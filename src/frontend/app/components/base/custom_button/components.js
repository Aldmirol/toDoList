import styles from './styles.module.scss';

export function CustomButton(name, customClass) {
    const customButton = document.createElement('div')
    const elemText = document.createElement('span')

    customButton.classList.add(styles.customButton);
    customButton.classList.add(customClass);
    elemText.classList.add(styles.elemText);

    elemText.innerText = name;

    customButton.append(elemText);

    return customButton;
}