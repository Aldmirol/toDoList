export function checkThemeState() {
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "dark");
    }
}

export function switchTheme(e) {
    console.log(e.target.checked);
}