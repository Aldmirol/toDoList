import styles from './styles.module.scss';

export function CustomButton({
    name = '',
    customClass = '',
    clickHandler = function(){}
}) {
    const customButton = document.createElement('div')
    const elemText = document.createElement('span')

    customButton.className = customClass;
    customButton.classList.add(styles.customButton);
    elemText.classList.add(styles.elemText);

    customButton.setAttribute('data-id', name.toLowerCase());
    elemText.setAttribute('data-id', name.toLowerCase());

    elemText.innerText = name;

    customButton.append(elemText);

    if(clickHandler) {
        customButton.addEventListener('click', clickHandler);
    }

    return customButton;
}