import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import reducer from "./reducers.js";

const persistConfig = {
    key: "root",
    storage,
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(logger));

const persistor = persistStore(store);

export { store, persistor }; 