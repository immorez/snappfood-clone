import { BaseQueryFn } from "@reduxjs/toolkit/query/react";

import i18n from "@/utils/i18n";

import { axiosInvoke } from "./axiosInvoke";
import IBaseQueryOpts, {
    IBaseQueryError,
    TFieldErrorOpts,
    TResponseErrorDetail,
} from "./types";
import { omit } from "lodash";

export interface ErrorObject {
    error: string;
    errorDescription: string;
}

const baseQuery =
    (): BaseQueryFn<IBaseQueryOpts, unknown, unknown> =>
    async (baseQueryOpts) => {
        const { method, path, data, options } = baseQueryOpts;

        const apiOptions = {
            displayError: true,
            ...((options && options.api) || {}),
        };

        const newOptions = omit(options, ["api"]);

        try {
            const result = await axiosInvoke({
                method,
                path,
                data,
                options: newOptions,
                authenticate: apiOptions.authenticate !== false,
            });

            return { data: result?.data };
        } catch (err) {
            const e = err as IBaseQueryError;

            let message: string | null = null;

            let status: number = 0;

            let isCancel: boolean = false;

            if (e.response) {
                const errorData = e.response.data as any;
                if (errorData) {
                    if (errorData.errors) {
                        e.fieldError = errorData.errors.reduce(
                            (
                                res: TFieldErrorOpts,
                                item: TResponseErrorDetail,
                            ) => {
                                const { error, errorDescription } = item;
                                const obj = { ...res };
                                if (!obj[error]) {
                                    obj[error] = errorDescription;
                                }
                                return obj;
                            },
                            {},
                        );
                    }
                }
                if (errorData.errors?.length) {
                    message = errorData.errors[0].errorDescription;
                } else if (e.response.status === 413) {
                    message = i18n.t("File size is too large to upload.");
                }

                if (e.response) {
                    status = e.response.status;
                }

                if (e.response.status === 429) {
                    message = i18n.t("Too many requests.");
                }
            } else if (!e.request) {
                message = i18n.t(
                    "Check your internet connection and try again.",
                );
                isCancel = true;
            } else {
                message =
                    import.meta.env.NODE_ENV === "development" ? e.message : "";
            }

            const error = {
                error: { message, status, isCancel, data: e.response?.data },
            };

            return error;
        }
    };

export default baseQuery();
