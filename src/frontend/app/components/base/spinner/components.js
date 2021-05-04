import styles from './styles.module.scss';

export function Spinner() {
    const spinner = document.createElement('i');

    spinner.className = 'fas fa-spinner fa-spin';
    spinner.classList.add(styles.spinner)

    return spinner;
}

export function LoadingSpinner() {
    const spinner = Spinner();

    spinner.classList.add('fa-3x', 'loading', styles.loadingSpinner);

    return spinner;
}

export function startLoadingSpinner() {
    return document.body.append(LoadingSpinner());
}

export function stopLoadingSpinner() {
    return document.querySelector('i.loading')?.remove();
}

export function ButtonSpinner() {
    return `<i class='fas fa-spinner fa-spin'></i>`;
}