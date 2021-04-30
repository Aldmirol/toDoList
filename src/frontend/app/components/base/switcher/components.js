import styles from "./styles.module.scss";

export function Switcher({
    firstState = "",
    secondState = "",
    clickHandler = function(){},
}) {
    const switcher = document.createElement("div");
    const input = document.createElement("input");
    const darkLabel = document.createElement("label");
    const lightLabel = document.createElement("label");

    switcher.className = "form-check form-switch";
    switcher.classList.add(styles.switcher);
    input.className = "form-check-input";
    input.classList.add(styles.input);
    darkLabel.className = "form-check-label";
    darkLabel.classList.add(styles.iconDark);
    lightLabel.className = "form-check-label";
    lightLabel.classList.add(styles.iconLight);

    input.setAttribute("type", "checkbox");
    input.setAttribute("id", "flexSwitchCheckChecked");
    input.setAttribute("checked", "");
    darkLabel.setAttribute("for", "flexSwitchCheckChecked");
    lightLabel.setAttribute("for", "flexSwitchCheckChecked");

    darkLabel.innerHTML = secondState;
    lightLabel.innerHTML = firstState;

    input.addEventListener("click", clickHandler);

    switcher.append(lightLabel, input, darkLabel);

    return switcher;
}