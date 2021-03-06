import {
    addNewUser,
    login
} from "../../services/login_and_new_user";
import { closeModalWithoutEventTarget } from "../base/helpers";
import { Modal } from "../base/modal/components";
import { LoginForm } from "./components";


export function openNewUserForm(e) {
    e.preventDefault();

    closeModalWithoutEventTarget();

    return document.body.append(Modal({
        title: "New user",
        isLoginModal: true,
        hasFooterCloseButton: false,
        body: LoginForm({
            isNewUserForm: true,
            submitHandler: addNewUser
        })
    }));
}

export function openLoginForm() {
    const user = localStorage.getItem('name');

    if (user) {
        return '';
    } else {
        return Modal({
            title: "Log in",
            body: LoginForm({
                isNewUserForm: false,
                submitHandler: login
            }),
            isLoginModal: true,
            hasFooterCloseButton: false,
        });
    }
}

export function openLoginFormWithAppendToRoot() {
    const root = document.querySelector('#root');

    localStorage.removeItem('data-id');
    localStorage.removeItem('name');

    return root.append(Modal({
        title: "Log in",
        body: LoginForm({
            isNewUserForm: false,
            submitHandler: login
        }),
        isLoginModal: true,
        hasFooterCloseButton: false,
    }));
}