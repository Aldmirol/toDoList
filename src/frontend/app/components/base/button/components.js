export function Button(type, title) {
    const button = document.createElement('button');

    button.classList.add('btn');
    button.classList.add(`btn-${type}`);

    button.innerText = title;

    return button;
}