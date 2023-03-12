import { configureStore } from "@reduxjs/toolkit";
import { nbuApi } from "./exchange/currencyApi";

export const store = configureStore({
    reducer: {
        [nbuApi.reducerPath]: nbuApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(nbuApi.middleware),
});
