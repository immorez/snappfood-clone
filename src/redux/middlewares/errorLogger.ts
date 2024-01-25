import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

/**
 * Log a error and show a toast!
 */

const undisplayedErrorCodes: string[] = [];

const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
        const { response } = action.payload as any;

        const { config, data } = response;

        if (
            !undisplayedErrorCodes.includes(data.code) &&
            config.method.toUpperCase() !== "GET" &&
            data.message
        ) {
            toast.error(data.message);
        }
    }

    return next(action);
};

export default rtkQueryErrorLogger;
