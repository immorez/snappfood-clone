import { PATH_MAIN } from "@/routes/paths";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = function () {
    const { t } = useTranslation();
    return (
        <div className="home">
            <div className="home--logo">
                <img alt="snapp-food-logo" src="/icon_256x256.png" />
            </div>
            <h3 className="home--subtitle">{t("TEXT_HOME_PAGE_SUBTITLE")}</h3>
            <Link
                to={PATH_MAIN.restaurant}
                className="button button--primary button--large"
            >
                {t("BUTTON_TEXT_RESTAURANT_HOME_PAGE")}
            </Link>
        </div>
    );
};

export default React.memo(Home);
