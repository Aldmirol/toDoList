import styles from './styles.module.scss';

export function Button({
    classList = 'primary',
    content = '',
    clickHandler = function() {},
    type = 'button',
    dataId = '',
    isModalFooterButton = false
}) {
    const button = document.createElement('button');

    button.classList.add('btn');
    button.classList.add(`btn-${classList}`);
    button.setAttribute('type', type);
    button.setAttribute('data-id', dataId);
    button.addEventListener('click', clickHandler);

    if (isModalFooterButton) {
        button.classList.add(styles.button);
    }

    if (typeof content === 'string') {
        button.textContent = content;
    } else {
        const btnEl = document.createElement('i');
        btnEl.classList.add('fas');
        btnEl.classList.add(`fa-${content[0]}`);
        btnEl.setAttribute('data-id', dataId);

        button.append(btnEl);
    }
    

    return button;
}