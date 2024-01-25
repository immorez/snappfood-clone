import { createApi } from "@reduxjs/toolkit/query/react";

import baseQuery from "../baseQuery";
import { TGetVendorsListParams, TGetVendorsListResponse } from "./types";

export const RESTAURANT_API_REDUCER_KEY = "RESTAURANT_API_REDUCER_KEY";

export const GET_VENDORS_LIST_KEY = "GET_VENDORS_LIST_KEY";

const restaurant = createApi({
    reducerPath: RESTAURANT_API_REDUCER_KEY,
    baseQuery,
    tagTypes: [GET_VENDORS_LIST_KEY],
    endpoints: (builder) => ({
        getVendorsList: builder.query<
            TGetVendorsListResponse,
            TGetVendorsListParams
        >({
            query: (values) => ({
                path: `/v3/restaurant/vendors-list`,
                method: "GET",
                options: {
                    params: values,
                },
            }),
            providesTags: [GET_VENDORS_LIST_KEY],
        }),
    }),
});

export default restaurant;
