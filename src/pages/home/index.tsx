import { PATH_MAIN } from "@/routes/paths";
import pageTitle from "@/utils/pageTitle";
import packageJson from "../../../package.json";
import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = function () {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{pageTitle(t("TEXT_HOME_PAGE_TITLE"))}</title>
            </Helmet>
            <div className="home">
                <div className="home--logo">
                    <img
                        alt="snapp-food-logo"
                        src="/icon_256x256.png"
                        role="img"
                        aria-label={t("Logo")}
                    />
                </div>
                <h3 className="home--subtitle" aria-level={2} role="heading">
                    {t("TEXT_HOME_PAGE_SUBTITLE")}
                </h3>
                <Link
                    data-testid="goToRestaurants"
                    to={PATH_MAIN.restaurant}
                    className="button button--primary button--large"
                    role="button"
                    aria-label={t("BUTTON_TEXT_RESTAURANT_HOME_PAGE")}
                >
                    {t("BUTTON_TEXT_RESTAURANT_HOME_PAGE")}
                </Link>
                <p className="home--version">
                    {t("TEXT_VERSION")} {packageJson.version}
                </p>
            </div>
        </>
    );
};

export default React.memo(Home);
