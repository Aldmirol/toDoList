import { Modal } from "./components";

export function openModal({
    title,
    body,
    hasFooterCloseButton,
    footerButtons
}) {
    return document.body.append(Modal({
        title,
        body,
        hasFooterCloseButton,
        footerButtons
    }));
}

export function closeModal(e) {
    return e.target.closest('.modal').remove();
}