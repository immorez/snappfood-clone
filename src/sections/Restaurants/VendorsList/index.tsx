import { defaultLat, defaultLong, defaultPageSize } from "@/config";
import { useGetVendorsListQuery } from "@/hooks/services/restaurantApiHooks";
import {
    DataEnumType,
    IFinalResult,
    IVendor,
} from "@/redux/services/restaurantApi/types";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import TextDataItem from "./TextDataItem";
import VendorItem from "./VendorItem";
import VendorItemSkeleton from "./VendorItemSkeleton";
import { useTranslation } from "react-i18next";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

const VendorsList = function () {
    const { t } = useTranslation();

    const [mergedData, setMergedData] = useState<IFinalResult[]>();

    const [page, setPage] = useState(0);

    const [hasMoreData, setHasMoreData] = useState(true);

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
    }, [mergedData]);

    const {
        data: vendorsList,
        isFetching,
        isLoading,
    } = useGetVendorsListQuery({
        lat: +defaultLat,
        long: +defaultLong,
        page_size: +defaultPageSize,
        page,
    });

    const onPageChangeHandler = useCallback(
        () => setPage((prevPage) => prevPage + 1),
        [],
    );

    useInfiniteScroll(
        isFetching,
        hasMoreData,
        "vendors-list",
        onPageChangeHandler,
    );

    useEffect(() => {
        if (vendorsList && vendorsList.data.finalResult.length > 0) {
            setMergedData(
                (prev) =>
                    [
                        ...(prev ?? []),
                        ...vendorsList.data.finalResult,
                    ] as IFinalResult[],
            );
        }
    }, [vendorsList]);

    useEffect(() => {
        if (vendorsList) {
            if (vendorsList.data.count <= page * +defaultPageSize) {
                setHasMoreData(false);
            }
        }
    }, [vendorsList, page]);

    if (!isLoading && mergedData?.length === 0) {
        return (
            <div className="no-results">
                <p>{t("TEXT_NO_RESULTS")}</p>
            </div>
        );
    }

    return (
        <ul className="vendors-list">
            {React.Children.toArray(sections)}
            {isFetching &&
                [...Array(isLoading ? 4 : 1)].map((_, i) => (
                    <VendorItemSkeleton key={i} />
                ))}
        </ul>
    );
};

export default React.memo(VendorsList);
