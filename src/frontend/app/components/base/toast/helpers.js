import { Toast } from './components';

export function showToast({
    titleText,
    bodyText,
    type
}) {
    document.body.append(Toast({
        titleText,
        bodyText,
        type
    }));
}