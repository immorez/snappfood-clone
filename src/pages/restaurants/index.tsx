import { defaultLat, defaultLong, defaultPageSize } from "@/config/constants";
import { useGetVendorsListQuery } from "@/hooks/services/restaurantApiHooks";
import { DataEnumType } from "@/redux/services/restaurantApi/types";
import pageTitle from "@/utils/pageTitle";
import React, { useMemo } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Restaurants = function () {
    const { t } = useTranslation();

    const { data: vendorsList } = useGetVendorsListQuery({
        lat: defaultLat,
        long: defaultLong,
        page_size: defaultPageSize,
        page: 0,
    });

    const renderSections = useMemo(() => {
        if (vendorsList) {
            let sections = [];
            vendorsList.data.finalResults.forEach((item) => {
                switch (item.type) {
                    case DataEnumType.TEXT:
                        sections.push(item.data);
                        break;
                    case DataEnumType.VENDOR:
                        sections.push(item.data);
                }
            });
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>{pageTitle(t("TEXT_RESTAURANTS_PAGE_TITLE"))}</title>
            </Helmet>
            <div className="restaurants"></div>
        </>
    );
};

export default React.memo(Restaurants);
