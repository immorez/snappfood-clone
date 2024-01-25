import i18n from "./i18n";

function pageTitle(subtitle: string) {
    return `${subtitle} | ${i18n.t("TEXT_PAGE_TITLE")}`;
}

export default pageTitle;
