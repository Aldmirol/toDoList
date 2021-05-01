import styles from './styles.module.scss';

export function CustomButton({
    name = '',
    clickHandler = function(){},
    active = false
}) {
    const customButton = document.createElement('div');
    const elemText = document.createElement('span');
    const theme = localStorage.getItem('theme');

    customButton.classList.add(styles.customButton);
    elemText.classList.add(styles.elemText);

    if (active) {
        if (theme === 'light') {
            customButton.classList.add('theme-active-aside-buttons-light');
        } else {
            customButton.classList.add('active-aside-buttons');
        }
    }

    customButton.setAttribute('data-id', name.toLowerCase());
    elemText.setAttribute('data-id', name.toLowerCase());

    elemText.innerText = name;

    customButton.append(elemText);

    if(clickHandler) {
        customButton.addEventListener('click', clickHandler);
    }

    return customButton;
}