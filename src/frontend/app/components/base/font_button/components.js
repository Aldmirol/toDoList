import styles from './styles.module.scss';

export function FontButton({
    type = '',
    dataId,
    clickHadler = function(){},
}) {
    const button = document.createElement('i');
    
    button.className = `fas fa-${type}`;
    button.setAttribute('data-id', dataId);

    if (type === 'edit') {
        button.classList.add(styles.editButton);
    } else if (type === 'trash-alt') {
        button.classList.add(styles.deleteButton);
    }

    button.addEventListener('click', clickHadler);

    return button;
}