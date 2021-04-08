export function Button({
    classList = 'primary',
    content = '',
    clickHandler = function() {},
    type = "button"
}) {
    const button = document.createElement('button');

    button.classList.add('btn');
    button.classList.add(`btn-${classList}`);
    button.setAttribute('type', type);
    button.addEventListener('click', clickHandler);
    button.textContent = content;

    return button;
}