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
            isNewUserForm: false
        }),
        isLoginModal: true,
        hasFooterCloseButton: false,
    }));
}