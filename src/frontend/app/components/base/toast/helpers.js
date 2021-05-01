import { Toast } from './components';

export function showToast({
    titleText,
    bodyText,
    type
}) {
    return document.body.append(Toast({
        titleText,
        bodyText,
        type
    }));
}