import { login } from "../../base/CRUD/login_and_new_user/controllers";
import {
    Modal
} from "../../base/modal/components";
import {
    LoginForm
} from "../../login_form";

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