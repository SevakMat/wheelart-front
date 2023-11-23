import { combineReducers, } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import {shallowEqual, TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { PersistConfig } from "redux-persist/es/types";

import authReducer from "./reducers/auth";

const rootReducer = combineReducers({
    auth: authReducer,

});

const persistConfig: PersistConfig<any> = {
    key: "root",
    storage,
    whitelist: ["currency", "language", "auth", "pricing", "portfolioWhite"],
    blacklist: ["portfolio", "portfolioBlack"]
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
    devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = (selector) => useSelector(selector, shallowEqual)
