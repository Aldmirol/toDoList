export function Button({
    classList = 'primary',
    content = '',
    clickHandler = function() {},
    type = "button",
    dataId = ''
}) {
    const button = document.createElement('button');

    button.classList.add('btn');
    button.classList.add(`btn-${classList}`);
    button.setAttribute('type', type);
    button.setAttribute('data-id', dataId);
    button.addEventListener('click', clickHandler);
    button.textContent = content;

    return button;
}