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
            isNewUserForm: true
        })
    }));
}