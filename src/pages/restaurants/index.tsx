import { defaultLat, defaultLong, defaultPageSize } from "@/config/constants";
import { useGetVendorsListQuery } from "@/hooks/services/restaurantApiHooks";
import { DataEnumType, IVendor } from "@/redux/services/restaurantApi/types";
import TextDataItem from "@/sections/Restaurants/TextDataItem";
import VendorItem from "@/sections/Restaurants/VendorsList/VendorItem";
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

    const sections = useMemo(() => {
        if (vendorsList) {
            return vendorsList.data.finalResult.map((item) => {
                switch (item.type) {
                    case DataEnumType.TEXT:
                        return <TextDataItem data={item.data as string} />;

                    case DataEnumType.VENDOR:
                        return <VendorItem {...(item.data as IVendor)} />;
                }
            });
        }
        return null;
    }, []);

    return (
        <>
            <Helmet>
                <title>{pageTitle(t("TEXT_RESTAURANTS_PAGE_TITLE"))}</title>
            </Helmet>
            <div className="restaurants">
                {React.Children.toArray(sections)}
            </div>
        </>
    );
};

export default React.memo(Restaurants);
