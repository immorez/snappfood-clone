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
import VendorItemSkeleton from "./VendorItemSkeleton";

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
                        return (
                            <TextDataItem
                                key={item.data as string}
                                text={item.data as string}
                            />
                        );

                    case DataEnumType.VENDOR:
                        return (
                            <VendorItem
                                key={(item.data as IVendor).id}
                                {...(item.data as IVendor)}
                            />
                        );
                }
            });
        }
        return null;
    }, [mergedData]);

    useEffect(() => {
        const onScroll = () => {
            if (hasMoreData) {
                const lastElement = document.querySelector(
                    ".vendors-list > :last-child",
                );

                if (lastElement) {
                    const rect = lastElement.getBoundingClientRect();
                    const scrolledToBottom = rect.bottom <= window.innerHeight;

                    if (scrolledToBottom && !isFetching && hasMoreData) {
                        setPage((prevPage) => prevPage + 1);
                    }
                }
            }
        };

        document.addEventListener("scroll", onScroll);

        return function () {
            document.removeEventListener("scroll", onScroll);
        };
    }, [page, isFetching, hasMoreData]);

    useEffect(() => {
        if (vendorsList && vendorsList.data.finalResult.length > 0) {
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
            if (vendorsList.data.count <= page * defaultPageSize) {
                setHasMoreData(false);
            }
        }
    }, [vendorsList, page]);

    return (
        <ul className="vendors-list">
            {React.Children.toArray(sections)}
            {isFetching &&
                [...Array(3)].map((_, i) => <VendorItemSkeleton key={i} />)}
        </ul>
    );
};

export default React.memo(VendorsList);
