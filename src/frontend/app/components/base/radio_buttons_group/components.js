import styles from './styles.module.scss';

export function RadioButtonsGroup({
    status = ''
}) {
    const group = document.createElement('div');

    group.classList.add('btn-group');
    group.setAttribute('role', 'group');
    group.setAttribute('aria-label', 'Basic radio toggle button group');

    if (status === 'to do') {
        group.append(toDoButton({
            checked: true
        }), inProgressButton({
            checked: false
        }), importantButton({
            checked: false
        }));
    } else if (status === 'in progress') {
        group.append(toDoButton({
            checked: false
        }), inProgressButton({
            checked: true
        }), importantButton({
            checked: false
        }));
    } else {
        group.append(toDoButton({
            checked: false
        }), inProgressButton({
            checked: false
        }), importantButton({
            checked: true
        }));
    }
    

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

function toDoButton({
    checked = false
}) {
    return radioButton({
        id: 'btn1',
        title: 'to do',
        checked: checked
    });
}

function inProgressButton({
    checked = false
}) {
    return radioButton({
        id: 'btn2',
        title: 'in progress',
        buttonType: 'info',
        checked: checked
    });
}

function importantButton({
    checked = false
}) {
    return radioButton({
        id: 'btn3',
        title: 'important',
        buttonType: 'danger',
        checked: checked
    });
}