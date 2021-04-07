export function Button({
    classList = 'primary',
    content = '',
    clickHandler,
}) {
    const button = document.createElement('button');

    button.classList.add('btn');
    button.classList.add(`btn-${classList}`);

    button.setAttribute('type', 'button');
    button.addEventListener('click', clickHandler);

    button.textContent = content;

    return button;
}