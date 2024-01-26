import axios from "axios";
import { omit } from "lodash";
import { baseUrl, requestTimeout } from "@/config";

import { IAxiosInvokeOpts } from "./types";

export const axiosInvoke = async (axiosInvokeOpts: IAxiosInvokeOpts) => {
    const { method, path, data, options } = axiosInvokeOpts;

    const instance = await axios({
        method,
        url: `${baseUrl}${path}`,
        headers: {
            ...(options && options.headers ? options.headers : null),
        },
        params: data ? data.params : undefined,
        data,
        ...(data instanceof FormData
            ? {
                  cancelToken: undefined,
                  timeout: 0,
              }
            : {
                  cancelToken: new axios.CancelToken((cancel) => {
                      setTimeout(() => {
                          cancel();
                      }, Number(requestTimeout));
                  }),
              }),
        ...omit(options, ["headers"]),
    });

    return instance;
};
