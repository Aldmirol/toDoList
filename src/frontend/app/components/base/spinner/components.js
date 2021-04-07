import styles from "./styles.module.scss";

export function Spinner() {
    const spinner = document.createElement("i");

    spinner.className = "fas fa-spinner fa-spin";
    spinner.classList.add(styles.spinner)

    return spinner;
}

export function LoadingSpinner() {
    const spinner = Spinner();

    spinner.classList.add("fa-3x", "loading", styles.loadingSpinner);

    return spinner;
}

export function startLoadingSpinner() {
    document.body.append(LoadingSpinner());
}

export function stopLoadingSpinner() {
    document.querySelector("i.loading")?.remove();
}