import {
    openLoginForm
} from "../../../header/user_panel/helpers";
import {
    changeButtonToSuccess,
    removeModal
} from "../../helpers";
import {
    ButtonSpinner
} from "../../spinner/components";
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
                    name: newUserName,
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
    const userName = document.querySelector('#user-name').value;
    const button = e.target;

    button.classList.add(styles.loginButton);

    button.innerHTML = ButtonSpinner();

    setTimeout(() => {
        fetch(`http://localhost:3000/users?name=${userName}`)
            .then(res => res.json())
            .then(user => {
                const userId = user[0].userId;
                const userName = user[0].name;
                const rootEl = document.querySelector("#root");

                rootEl.setAttribute("data-id", userId);
                rootEl.setAttribute("value", userName);

                changeButtonToSuccess({
                    button: button,
                    classList: styles.loginButton
                });

                setTimeout(() => {
                    removeModal();
                }, 1000);
            })
            .catch(e => alert("error"));
    }, 1500);

}