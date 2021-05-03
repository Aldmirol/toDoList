import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';
import styles from './styles.module.scss';
import { openLoginForm } from './login_form/helpers';


export function App() {
    const app = document.createElement('div');

    app.classList.add(styles.app);

    app.append(Header(), Main(), Footer(), openLoginForm());

    return app;
}