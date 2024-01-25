import type { PreloadedStateShapeFromReducersMapObject } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
    useDispatch as useAppDispatch,
    useSelector as useAppSelector,
    TypedUseSelectorHook,
} from "react-redux";

import { rootReducer } from "./rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = (
    preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>,
) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {},
            }).concat([]),
    });
};

const store = setupStore();

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;

const { dispatch } = store;

const useDispatch = () => useAppDispatch<AppDispatch>();

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export type AppStore = ReturnType<typeof setupStore>;

export { store, dispatch, useSelector, useDispatch };
