'use strict';

export function headerMobileMenu() {
    const mainHeader = document.querySelector(`.main-header`);
    const mainHeaderToggle = document.querySelector(`.main-header__toggle`);
    const mainHeaderLineSeparator = document.querySelector(`.main-header__line-separator`);
    const mainHeaderList = document.querySelector(`.main-header__list--mob-tab-list`);

    mainHeaderToggle.addEventListener(`click`, () => {
        mainHeader.classList.toggle(`main-header--opened-menu`);
        mainHeaderToggle.classList.toggle(`main-header__toggle--opened-menu`);
        mainHeaderLineSeparator.classList.toggle(`main-header__line-separator--opened-menu`);
        mainHeaderList.classList.toggle(`main-header__list--opened-menu`)
    })
}