import { AxiosError, AxiosRequestConfig } from "axios";

export interface IOptionsApiParams {
    displayError?: boolean;
    authenticate?: boolean;
}

export interface IOptionsParams extends AxiosRequestConfig {
    api?: IOptionsApiParams;
    disableBaseUrl?: boolean;
}

export default interface IBaseQueryOpts {
    method: AxiosRequestConfig["method"];
    path: string;
    data?: AxiosRequestConfig["data"];
    options?: IOptionsParams;
}

export interface IAxiosInvokeOpts extends IBaseQueryOpts {
    authenticate: boolean;
}

export interface IBaseQueryError extends AxiosError {
    fieldError?: object;
    isNetworkError?: boolean;
}

export type TResponseErrorDetail = {
    error: string;
    errorDescription: string;
};

export type TResponseError = {
    status: number;
    errors: TResponseErrorDetail[];
};

export type TFieldErrorOpts = {
    [name: string]: string;
};
