import { defaultLat, defaultLong, defaultPageSize } from "@/config/constants";
import { useGetVendorsListQuery } from "@/hooks/services/restaurantApiHooks";
import {
    DataEnumType,
    IFinalResult,
    IVendor,
} from "@/redux/services/restaurantApi/types";
import React, { useEffect, useMemo, useState } from "react";
import TextDataItem from "./TextDataItem";
import VendorItem from "./VendorItem";

const VendorsList = function () {
    const [page, setPage] = useState(0);
    const [mergedData, setMergedData] = useState<IFinalResult[]>([]);

    const [hasMoreData, setHasMoreData] = useState(true);

    const { data: vendorsList, isFetching } = useGetVendorsListQuery({
        lat: defaultLat,
        long: defaultLong,
        page_size: defaultPageSize,
        page,
    });

    const sections = useMemo(() => {
        if (mergedData) {
            return mergedData.map((item) => {
                switch (item.type) {
                    case DataEnumType.TEXT:
                        return <TextDataItem text={item.data as string} />;

                    case DataEnumType.VENDOR:
                        return <VendorItem {...(item.data as IVendor)} />;
                }
            });
        }
        return null;
    }, [mergedData]);

    useEffect(() => {
        const onScroll = () => {
            if (hasMoreData) {
                const scrolledToBottom =
                    window.innerHeight + window.scrollY >=
                    document.body.offsetHeight;
                if (scrolledToBottom && !isFetching && hasMoreData) {
                    setPage(page + 1);
                }
            }
        };

        document.addEventListener("scroll", onScroll);

        return function () {
            document.removeEventListener("scroll", onScroll);
        };
    }, [page, isFetching, hasMoreData]);

    useEffect(() => {
        if (vendorsList && vendorsList.data.finalResult.length) {
            setMergedData(
                (prev) =>
                    [
                        ...prev,
                        ...vendorsList.data.finalResult,
                    ] as IFinalResult[],
            );
        }
    }, [vendorsList]);

    useEffect(() => {
        if (vendorsList) {
            if (vendorsList.data.count <= mergedData.length * page) {
                setHasMoreData(false);
            }
        }
    }, [vendorsList]);
    return (
        <div className="vendors-list">{React.Children.toArray(sections)}</div>
    );
};

export default React.memo(VendorsList);
