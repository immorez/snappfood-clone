import { defaultLat, defaultLong, defaultPageSize } from "@/config/constants";
import { useGetVendorsListQuery } from "@/hooks/services/restaurantApiHooks";
import { DataEnumType, IVendor } from "@/redux/services/restaurantApi/types";
import React, { useMemo } from "react";
import TextDataItem from "./TextDataItem";
import VendorItem from "./VendorItem";

const VendorsList = function () {
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
                        return <TextDataItem text={item.data as string} />;

                    case DataEnumType.VENDOR:
                        return <VendorItem {...(item.data as IVendor)} />;
                }
            });
        }
        return null;
    }, [vendorsList]);
    return (
        <div className="vendors-list">{React.Children.toArray(sections)}</div>
    );
};

export default React.memo(VendorsList);
