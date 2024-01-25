import { defaultLat, defaultLong, defaultPageSize } from "@/config/constants";
import { useGetVendorsListQuery } from "@/hooks/services/restaurantApiHooks";
import React from "react";

const Restaurants = function () {
    const { data: vendorsList } = useGetVendorsListQuery({
        lat: defaultLat,
        long: defaultLong,
        page_size: defaultPageSize,
        page: 0,
    });
    console.log(vendorsList);
    return <>restaurants</>;
};

export default React.memo(Restaurants);
