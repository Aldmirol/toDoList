export function Button({
    classList = 'primary',
    content = ''
}) {
    const button = document.createElement('button');

    button.classList.add('btn');
    button.classList.add(`btn-${classList}`);

    button.innerText = content;

    return button;
}