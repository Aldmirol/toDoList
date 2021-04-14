import { App } from './app/components';
import { checkTheme } from './app/components/header/user_panel/theme_switcher';
import './styles.scss';

document.querySelector('#root').append(App());

checkTheme();