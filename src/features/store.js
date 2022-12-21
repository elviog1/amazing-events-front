import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import eventsAPI from "./eventsAPI";

export const store = configureStore({
    reducer:{
        [eventsAPI.reducerPath] : eventsAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        inmutableCheck: false,
        serializableCheck: false,
    }).concat(eventsAPI.middleware)
})