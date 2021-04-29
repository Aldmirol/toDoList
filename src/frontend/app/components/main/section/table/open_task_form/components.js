export function OpenTaskForm({
    title = '',
    description = '',
    deadline = ''
}) {
    const formEl = document.createElement('form');
    const titleEl = document.createElement('input');
    const descriptionEl = document.createElement('textarea');
    const statusEl = document.createElement('input');

    titleEl.classList.add('form-control');
    descriptionEl.classList.add('form-control');
    statusEl.classList.add('form-control');
    titleEl.setAttribute('readonly', '');
    descriptionEl.setAttribute('readonly', '');
    statusEl.setAttribute('readonly', '');
}