import '../../../../../styles.scss';
import { LightThemeElementSelectors } from './constants';

export function checkThemeState() {
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'dark');
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

        if (selectors.activeAsideButtons) {
            selectors.activeAsideButtons.classList.add('active-aside-buttons');
        }

        selectors.asideButtonsText.forEach(el => el.classList.add(`theme-text-main-${theme}`, `theme-aside-buttons-dark`));
        selectors.hiddenButtonsText.forEach(el => el.classList.add(`theme-text-main-${theme}`, `theme-aside-buttons-dark`));
        selectors.section.classList.add(`theme-main-${theme}`);
        selectors.footerAsideContainer.classList.add(`theme-main-${theme}`);
        selectors.footerSectionContainer.classList.add(`theme-secondary-${theme}`);
        selectors.footerText.classList.add(`theme-text-main-${theme}`);
        

        if (theme === 'light') {
            selectors.table.classList.remove('table-dark');
            selectors.table.classList.add('theme-table-text-light');
            if (selectors.activeAsideButtons) {
                selectors.activeAsideButtons.classList.remove('active-aside-buttons');
                selectors.activeAsideButtons.classList.add('theme-active-aside-buttons-light');
            }
        } else {
            selectors.table.classList.add('table-dark');
            selectors.table.classList.remove('theme-table-text-light');
            if (selectors.activeAsideButtons) {
                selectors.activeAsideButtons.classList.add('active-aside-buttons');
                selectors.activeAsideButtons.classList.remove('theme-active-aside-buttons-light');
            }
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

        if (selectors.activeAsideButtons) {
            selectors.activeAsideButtons.classList.remove('theme-active-aside-buttons-light');
        }
        
        selectors.asideButtonsText.forEach(el => el.classList.remove('theme-text-main-light'));
        selectors.hiddenButtonsText.forEach(el => el.classList.remove('theme-text-main-light'));
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
    const selectors = new LightThemeElementSelectors();
    
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
        selectors.hiddenButtonsText.forEach(el => el.classList.remove('theme-text-main-light'));

        if (selectors.activeAsideButtons){
            selectors.activeAsideButtons.classList.remove('theme-active-aside-buttons-light');
            selectors.activeAsideButtons.classList.add('active-aside-buttons');
        }

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

        if (selectors.activeAsideButtons) {
            selectors.activeAsideButtons.classList.add('theme-active-aside-buttons-light');
            selectors.activeAsideButtons.classList.remove('active-aside-buttons');
        }
        
        selectors.asideButtonsText.forEach(el => el.classList.add('theme-text-main-light'));
        selectors.hiddenButtonsText.forEach(el => el.classList.add('theme-text-main-light'));
        selectors.section.classList.add(`theme-main-light`);
        selectors.table.classList.remove('table-dark');
        selectors.table.classList.add('theme-table-text-light');
        selectors.footerAsideContainer.classList.add(`theme-main-light`);
        selectors.footerSectionContainer.classList.add(`theme-secondary-light`);
        selectors.footerText.classList.add('theme-text-main-light');
        
    }
}