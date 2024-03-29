import { PATH_MAIN } from "@/routes/paths";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NotFound = function () {
    const { t } = useTranslation();
    return (
        <div className="not-found">
            <div className="not-found--logo">
                <img
                    alt="snapp-food-logo"
                    src="/icon_256x256.png"
                    role="img"
                    aria-label={t("Logo")}
                />
            </div>
            <h3 className="not-found--subtitle" role="heading" aria-level={1}>
                {t("TEXT_PAGE_NOT_FOUND")}
            </h3>
            <Link
                to={PATH_MAIN.home}
                className="button button--primary button--large"
                role="button"
                aria-label={t("BUTTON_TEXT_BACK_TO_HOME")}
            >
                {t("BUTTON_TEXT_BACK_TO_HOME")}
            </Link>
        </div>
    );
};

export default React.memo(NotFound);
