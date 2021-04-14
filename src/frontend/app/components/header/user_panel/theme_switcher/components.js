import { Switcher } from "../../../base/switcher";
import { checkThemeState, switchTheme } from "./helpers";

export function ThemeSwitcher() {
    checkThemeState();

    return Switcher({
        firstState: `<i class="fas fa-sun"></i>`,
        secondState: `<i class="far fa-moon"></i>`,
        clickHandler: switchTheme,
    });
}