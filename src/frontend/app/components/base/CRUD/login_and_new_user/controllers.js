import { openLoginForm } from "../../../header/user_panel/helpers";
import { changeButtonToSuccess, removeModal } from "../../helpers";
import { ButtonSpinner } from "../../spinner/components";
import styles from './styles.module.scss';

export function addNewUser(e) {
    const newUserPassword = document.querySelector('#password').value;
    const newUserName = document.querySelector('#user-name').value;
    const button = e.target;

    button.classList.add(styles.addUser);

    button.innerHTML = ButtonSpinner();

    setTimeout(() => {
        fetch('http://localhost:3000/users', {
                method: 'POST',
                body: JSON.stringify({
                    userName: newUserName,
                    password: newUserPassword,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(user => {
                changeButtonToSuccess({
                    button: button
                });

                setTimeout(() => {
                    removeModal();

                    openLoginForm();
                }, 1000);
                
            });
    }, 1500);
}

export function login(e) {
    const password = document.querySelector('#password').value;
    const name = document.querySelector('#user-name').value;
    const button = e.target;

    fetch('http://localhost:3000/tasks', {
        method: 'POST',
        body: JSON.stringify({
            userName: name,
            password: password,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(user => {
        console.log(user);
    });


}