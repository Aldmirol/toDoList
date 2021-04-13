export function checkStatus() {
    const buttons = document.getElementsByName('btnradio');

    for (let btn of buttons) {
        if (btn.checked) {
            return btn.defaultValue;
        }
    }
}