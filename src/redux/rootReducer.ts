import { combineReducers } from "@reduxjs/toolkit";
import restaurantApi, {
    RESTAURANT_API_REDUCER_KEY,
} from "./services/restaurantApi";

const rootReducer = combineReducers({
    [RESTAURANT_API_REDUCER_KEY]: restaurantApi.reducer,
});

export { rootReducer };
