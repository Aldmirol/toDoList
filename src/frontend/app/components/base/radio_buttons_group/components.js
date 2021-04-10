import styles from './styles.module.scss';

export function RadioButtonsGroup() {
    const group = document.createElement('div');
    
    const label = document.createElement('label');

    group.classList.add('btn-group');
    group.setAttribute('role', 'group');
    group.setAttribute('aria-label', 'Basic radio toggle button group');

    group.append(
        radioButton({
            id: 'btn1',
            title: 'to do',
            checked: true
        }),
        radioButton({
            id: 'btn2',
            title: 'in progress',
            buttonType: 'info'
        }),
        radioButton({
            id: 'btn3',
            title: 'important',
            buttonType: 'danger'
        })
    );

    return group;
}

function radioButton({
    id,
    checked = false,
    title,
    buttonType = 'primary'
}) {
    const fragment = document.createDocumentFragment();
    const input = document.createElement('input');
    const label = document.createElement('label');

    input.classList.add('btn-check');
    input.setAttribute('type', 'radio');
    input.setAttribute('id', id);
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('name', 'btnradio');
    input.setAttribute('value', title);
    label.className = `btn btn-outline-${buttonType} ${styles.label}`;
    label.setAttribute('for', id);

    if (checked) {
        input.setAttribute('checked', '');
    }
    
    label.textContent = title;

    fragment.append(input, label);

    return fragment;
}