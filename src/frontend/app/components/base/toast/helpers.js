import { Toast } from './components';

export function showToast({
    titleText,
    bodyText,
    type,
    hideTime
}) {
    document.body.append(Toast({
        titleText,
        bodyText,
        type,
        hideTime
    }));
}