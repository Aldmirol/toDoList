import { changeBadgeToSuccess, changeButtonToSuccess } from "../../helpers";
import { ButtonSpinner } from "../../spinner/components";
import styles from './styles.module.scss';

export function changeStatusToDone(e) {
    const taskId = e.target.dataset.id;
    const badge = e.target;
    const status = badge.textContent;
    
    badge.innerHTML = ButtonSpinner();

    
    setTimeout(() => {
        fetch(`http://localhost:3000/tasks/${taskId}`, {
            method: 'PUT',
            body: JSON.stringify({
                    status: 'done'
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
        })
        .then(res => res.json())
        .then(task => {
            changeBadgeToSuccess({
                badge: badge,
                classList: styles.badge
            })
        })
    }, 1500);
    
console.dir(status);
}