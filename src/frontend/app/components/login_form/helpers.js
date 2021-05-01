import {
    addNewUser,
    login
} from "../base/CRUD/login_and_new_user";
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
    return document.body.append(Modal({
        title: "Log in",
        body: LoginForm({
            isNewUserForm: false,
            submitHandler: login
        }),
        isLoginModal: true,
        hasFooterCloseButton: false,
    }));
}