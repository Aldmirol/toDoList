import { Button } from "../base/button/components";
import { openLoginForm } from "../header/user_panel/helpers";
import { openNewUserForm } from "./helpers";
import styles from "./styles.module.scss";

export function LoginForm({
    isNewUserForm = false
}) {
    const loginForm = document.createElement("div");
    const userNameContainer = document.createElement("div");
    const passwordContainer = document.createElement("div");
    const userNameInput = document.createElement("input");
    const userNameTitle = document.createElement("label");
    const passwordInput = document.createElement("input");
    const passwordTitle = document.createElement("label");
    const buttonContainer = document.createElement("div");
    const loginButton = Button({
        classList: "primary",
        content: "Log in",
        type: "submit"
    });
    const backButton = Button({
        content: "Back",
        type: "button",
        classList: "secondary",
    });
    const newUserContainer = document.createElement("div");
    const newUserText = document.createElement("span")
    const newUserLink = document.createElement("a");

    loginForm.classList.add("form", "login-form");
    userNameContainer.classList.add("m-3");
    passwordContainer.classList.add("m-3");
    userNameInput.classList.add("form-control");
    userNameTitle.classList.add("form-label");
    passwordInput.classList.add("form-control");
    passwordTitle.classList.add("form-label");
    buttonContainer.classList.add("button-container", "m-3");
    newUserContainer.classList.add("new-user", "mt-3");
    newUserLink.classList.add(styles.userLink);

    userNameInput.setAttribute("type", "text");
    userNameInput.setAttribute("id", "user-name");
    userNameInput.setAttribute("placeholder", "Enter username");
    userNameInput.setAttribute("required", "");
    userNameTitle.setAttribute("for", "user-name");
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "password");
    passwordInput.setAttribute("placeholder", "Enter password");
    passwordInput.setAttribute("required", "");
    passwordTitle.setAttribute("for", "password");
    newUserContainer.classList.add(styles.newUserContainer);
    newUserLink.setAttribute("href", "#");

    userNameTitle.textContent = "Username";
    passwordTitle.textContent = "Password";
    newUserText.textContent = "Don't have an account yet? ";
    newUserLink.textContent = "Register now";

    newUserContainer.append(newUserText, newUserLink);
    if (isNewUserForm) {
        buttonContainer.append(loginButton, backButton);
        buttonContainer.classList.add(styles.buttonContainer);
        backButton.addEventListener("click", openLoginForm);
    } else {
        buttonContainer.append(loginButton, newUserContainer);
    }
    userNameContainer.append(userNameTitle, userNameInput);
    passwordContainer.append(passwordTitle, passwordInput);

    newUserLink.addEventListener("click", openNewUserForm);

    loginForm.append(userNameContainer, passwordContainer, buttonContainer);

    return loginForm;
}