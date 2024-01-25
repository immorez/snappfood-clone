import { PATH_MAIN } from "@/routes/paths";
import VendorsList from "@/sections/Restaurants/VendorsList";
import pageTitle from "@/utils/pageTitle";
import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Restaurants = function () {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{pageTitle(t("TEXT_RESTAURANTS_PAGE_TITLE"))}</title>
            </Helmet>
            <div className="restaurants">
                <Link className="back-button" to={PATH_MAIN.home}>
                    <FaChevronLeft />
                </Link>
                <VendorsList />
            </div>
        </>
    );
};

export default React.memo(Restaurants);
