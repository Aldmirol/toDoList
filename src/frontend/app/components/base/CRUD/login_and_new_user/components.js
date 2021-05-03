import moment from 'moment';
import { openLoginFormWithAppendToRoot } from '../../../login_form/helpers';
import { Row } from '../../../main/section/table/row';
import {
    changeButtonToSuccess,
    removeModal,
    changeButtonToError,
    addToast,
    addEmptyRow
} from '../../helpers';
import { ButtonSpinner } from '../../spinner/components';
import styles from './styles.module.scss';

export function addNewUser(e) {
    const newUserPassword = document.querySelector('#password').value;
    const newUserName = document.querySelector('#user-name').value;
    const button = e.target;

    button.classList.add(styles.addUser);

    button.innerHTML = ButtonSpinner();

    if (newUserName) {
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
                        button: button,
                        classList: styles.addUser
                    });

                    addToast({
                        titleText: 'Success',
                        bodyText: 'New user added',
                        type: 'success',
                        hideTime: 2000
                    });

                    setTimeout(() => {
                        removeModal();

                        openLoginFormWithAppendToRoot();
                    }, 1000);

                });
        }, 1500);
    } else {
        setTimeout(() => {
            changeButtonToError({
                button: button,
                classList: styles.addUser
            });

            setTimeout(() => {
                button.classList.remove('btn-danger');
                button.classList.add(styles.addUser, 'btn-primary');
                button.textContent = 'Sign in';
            }, 2000);

            addToast({
                titleText: 'Error',
                bodyText: 'Enter user name',
                type: 'danger',
                hideTime: 2000
            });
        }, 1500);
    }
}

export function login(e) {
    const userName = document.querySelector('#user-name').value;
    const button = e.target;

    button.classList.add(styles.loginButton);

    button.innerHTML = ButtonSpinner();

    setTimeout(() => {
        fetch(`http://localhost:3000/users?name=${userName}`)
            .then(res => res.json())
            .then(user => {
                if (user !== 'Not found') {
                    const userId = user[0].userId;
                    const userName = user[0].name;
                    const tbody = document.querySelector('tbody');
                    const userNameInfo = document.querySelector('.user-name-info');

                    localStorage.setItem('data-id', userId);
                    localStorage.setItem('name', userName);

                    userNameInfo.textContent = localStorage.getItem('name')

                    changeButtonToSuccess({
                        button: button,
                        classList: styles.loginButton
                    });

                    addToast({
                        titleText: 'Success',
                        bodyText: 'Successful log in',
                        type: 'success',
                        hideTime: 2000
                    });

                    tbody.innerHTML = '';

                    fetch('http://localhost:3000/tasks/')
                        .then(res => res.json())
                        .then(tasks => {
                            const doneStatusEl = document.createDocumentFragment();
                            const allStatusExeptDoneEl = document.createDocumentFragment();

                            tasks.forEach(task => {
                                const maxDate = new Date(task.expirationDate);
                                const deadline = moment(maxDate).format('LL');

                                if (task.status === 'done' && task.userId === '' + userId) {
                                    doneStatusEl.append(Row({
                                        title: task.title,
                                        description: task.description,
                                        expirationDate: deadline,
                                        status: task.status,
                                        id: task._id,
                                        hasDoneStatus: true
                                    }));
                                } else if (task.status !== 'done' && task.userId === '' + userId) {
                                    allStatusExeptDoneEl.append(Row({
                                        title: task.title,
                                        description: task.description,
                                        expirationDate: deadline,
                                        status: task.status,
                                        id: task._id
                                    }));
                                }
                            });
                            tbody.append(allStatusExeptDoneEl, doneStatusEl);

                            addEmptyRow();
                        });

                    setTimeout(() => {
                        removeModal();
                    }, 1000);
                } else {
                    changeButtonToError({
                        button: button,
                        classList: styles.loginButton
                    });

                    setTimeout(() => {
                        button.classList.remove('btn-danger');
                        button.classList.add(styles.loginButton, 'btn-primary');
                        button.textContent = 'Log in';
                    }, 2000);

                    addToast({
                        titleText: 'Error',
                        bodyText: 'User name or password is invalid',
                        type: 'danger',
                        hideTime: 2000
                    });
                }
                
            })
            .catch(e => {
                changeButtonToError({
                    button: button,
                    classList: styles.loginButton
                });

                setTimeout(() => {
                    button.classList.remove('btn-danger');
                    button.classList.add(styles.loginButton, 'btn-primary');
                    button.textContent = 'Log in';
                }, 1500);

                addToast({
                    titleText: 'Error',
                    bodyText: 'User name or password is invalid',
                    type: 'warning',
                    hideTime: 2000
                });
            });
    }, 1500);

}