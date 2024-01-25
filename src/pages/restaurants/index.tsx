import VendorsList from "@/sections/Restaurants/VendorsList";
import pageTitle from "@/utils/pageTitle";
import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Restaurants = function () {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{pageTitle(t("TEXT_RESTAURANTS_PAGE_TITLE"))}</title>
            </Helmet>
            <div className="restaurants">
                <VendorsList />
            </div>
        </>
    );
};

export default React.memo(Restaurants);
