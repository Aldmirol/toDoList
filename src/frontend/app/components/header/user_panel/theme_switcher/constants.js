export class LightThemeElementSelectors {
    constructor() {
        //header components
        this.logo = document.querySelector('div[class^="logo"]');
        this.logoText = this.logo.querySelector('span');
        this.userPanel = document.querySelector('div[class^="userPanel"]');
        this.switcherLabels = this.userPanel.querySelectorAll('i');
        this.userName = this.userPanel.querySelector('span');

        //main components
        this.asideContainer = document.querySelector('[class^="side-panel"]');
        this.asideButtons = document.querySelectorAll('[class^="custom"]');
        this.activeAsideButtons = document.querySelector('div[class*="active"]');
        this.asideButtonsText = this.asideContainer.querySelectorAll('aside span');
        this.hiddenButtonsText = document.querySelectorAll(`span[class^="elem"]`);
        this.section = document.querySelector('section');
        this.table = document.querySelector('table');

        //footer components
        this.footerAsideContainer = document.querySelector('[class^="aside"]');
        this.footerSectionContainer = document.querySelector('.footer-section');
        this.footerText = this.footerSectionContainer.querySelector('span');
    }
    
}
