import moment from "moment";
import {
    openLoginForm
} from "../../../header/user_panel/helpers";
import { Row } from "../../../main/section/table/row";
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
                const tbody = document.querySelector("tbody");

                rootEl.setAttribute("data-id", userId);
                rootEl.setAttribute("value", userName);

                changeButtonToSuccess({
                    button: button,
                    classList: styles.loginButton
                });

                tbody.innerHTML = "";

                fetch("http://localhost:3000/tasks/")
                    .then(res => res.json())
                    .then(tasks => {
                        console.log(userId);
                        tasks.forEach(task => {
                            const doneStatusEl = document.createDocumentFragment();
                            const allStatusExeptDoneEl = document.createDocumentFragment();
                            const maxDate = new Date(task.expirationDate);
                            const deadline = moment(maxDate).format('LL');

                            if (task.status === "done" && task.userId === "" + userId) {
                                doneStatusEl.append(Row({
                                    title: task.title,
                                    description: task.description,
                                    expirationDate: deadline,
                                    status: task.status,
                                    id: task._id,
                                    hasDoneStatus: true
                                }));
                            } else if (task.status !== "done" && task.userId === "" + userId) {
                                allStatusExeptDoneEl.append(Row({
                                    title: task.title,
                                    description: task.description,
                                    expirationDate: deadline,
                                    status: task.status,
                                    id: task._id
                                }));
                            } else {
                                tbody.append(Row({
                                    description: ["No tasks yet"]
                                }));
                            }

                            tbody.append(doneStatusEl, allStatusExeptDoneEl);
                        }   
                        );
                    });
            
                setTimeout(() => {
                    removeModal();
                }, 1000);
            })
            .catch(e => alert("error"));
    }, 1500);

}