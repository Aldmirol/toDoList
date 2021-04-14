import '../../../../../styles.scss';
import { LightThemeElementSelectors } from './constants';

export function checkThemeState() {
    if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "dark");
    }
}



export function checkTheme() {
    const theme = localStorage.getItem('theme');
    const switcher = document.querySelector('#flexSwitchCheckChecked');
    const selectors = new LightThemeElementSelectors();

    if (theme) {
        selectors.logo.classList.add(`theme-main-${theme}`);
        selectors.logoText.classList.add(`theme-text-main-${theme}`);
        selectors.userPanel.classList.add(`theme-secondary-${theme}`);
        selectors.switcherLabels.forEach(el => el.classList.add(`theme-text-main-${theme}`));
        selectors.userName.classList.add(`theme-text-main-${theme}`);
        selectors.asideContainer.classList.add(`theme-secondary-${theme}`);
        selectors.asideButtons.forEach(el => el.classList.add(`theme-aside-buttons-${theme}`));
        selectors.asideButtonsText.forEach(el => el.classList.add(`theme-text-main-${theme}`));
        selectors.section.classList.add(`theme-main-${theme}`);
        selectors.footerAsideContainer.classList.add(`theme-main-${theme}`);
        selectors.footerSectionContainer.classList.add(`theme-secondary-${theme}`);
        selectors.footerText.classList.add(`theme-text-main-${theme}`);
        

        if (theme === 'light') {
            selectors.table.classList.remove('table-dark');
            selectors.table.classList.add('theme-table-text-light');
        } else {
            selectors.table.classList.add('table-dark');
            selectors.table.classList.remove('theme-table-text-light');
        }

    } else {
        localStorage.setItem('theme', 'dark');
        selectors.logo.classList.remove('theme-main-light');
        selectors.logoText.classList.remove('theme-text-main-light');
        selectors.userPanel.classList.remove('theme-secondary-light');
        selectors.switcherLabels.forEach(el => el.classList.remove('theme-text-main-light'));
        selectors.userName.classList.remove('theme-text-main-light');
        selectors.asideContainer.classList.remove('theme-secondary-light');
        selectors.asideButtons.forEach(el => el.classList.remove('theme-aside-buttons-light'));
        selectors.asideButtonsText.forEach(el => el.classList.remove('theme-text-main-light'));
        selectors.section.classList.remove('theme-main-light');
        selectors.table.classList.add('table-dark');
        selectors.table.classList.remove('theme-table-text-light');
        selectors.footerAsideContainer.classList.remove('theme-main-light');
        selectors.footerSectionContainer.classList.remove('theme-secondary-light');
        selectors.footerText.classList.remove('theme-text-main-light');
        
    }

    if (theme && theme === 'light') {
        switcher.removeAttribute('checked');
    }
}


export function switchTheme({
    target: {
        checked
    }
}) {
    // const theme = localStorage.getItem('theme');
    const selectors = new LightThemeElementSelectors();
    // const logo = document.querySelector('div[class^="logo"]');
    // const userPanel = document.querySelector('div[class^="userPanel"]');
    
    if (checked) {
        localStorage.setItem('theme', 'dark');
        selectors.logo.classList.remove('theme-main-light');
        selectors.logoText.classList.remove('theme-text-main-light');
        selectors.userPanel.classList.remove('theme-secondary-light');
        selectors.switcherLabels.forEach(el => el.classList.remove('theme-text-main-light'));
        selectors.userName.classList.remove('theme-text-main-light');
        selectors.asideContainer.classList.remove('theme-secondary-light');
        selectors.asideButtons.forEach(el => el.classList.remove('theme-aside-buttons-light'));
        selectors.asideButtonsText.forEach(el => el.classList.remove('theme-text-main-light'));
        selectors.section.classList.remove('theme-main-light');
        selectors.table.classList.add('table-dark');
        selectors.table.classList.remove('theme-table-text-light');
        selectors.footerAsideContainer.classList.remove('theme-main-light');
        selectors.footerSectionContainer.classList.remove('theme-secondary-light');
        selectors.footerText.classList.remove('theme-text-main-light');
        
    } else {
        localStorage.setItem('theme', 'light');
        selectors.logo.classList.add(`theme-main-light`);
        selectors.logoText.classList.add('theme-text-main-light');
        selectors.userPanel.classList.add(`theme-secondary-light`);
        selectors.switcherLabels.forEach(el => el.classList.add('theme-text-main-light'));
        selectors.userName.classList.add('theme-text-main-light');
        selectors.asideContainer.classList.add(`theme-secondary-light`);
        selectors.asideButtons.forEach(el => el.classList.add('theme-aside-buttons-light'));
        selectors.asideButtonsText.forEach(el => el.classList.add('theme-text-main-light'));
        selectors.section.classList.add(`theme-main-light`);
        selectors.table.classList.remove('table-dark');
        selectors.table.classList.add('theme-table-text-light');
        selectors.footerAsideContainer.classList.add(`theme-main-light`);
        selectors.footerSectionContainer.classList.add(`theme-secondary-light`);
        selectors.footerText.classList.add('theme-text-main-light');
        
    }
}