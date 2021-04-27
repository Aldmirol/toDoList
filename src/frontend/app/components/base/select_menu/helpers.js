import styles from "./styles.module.scss";

export function sortByStatus(e) {
    const value = e.target.value;
    const rows = document.querySelector("tbody");
    
    rows.childNodes.forEach(row => {
        const status = row.querySelector(".badge").textContent;

        if (value === "all" || value === status.toLowerCase()) {
            row.classList.add(styles.show);
            row.classList.remove(styles.hide);
        } else {
            row.classList.add(styles.hide);
            row.classList.remove(styles.show);
        }
    });
}