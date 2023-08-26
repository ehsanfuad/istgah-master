import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import urlReducer from "./urlReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistConfig2 = {
  key: "root2",
  version: 2,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);
const persistedReducer2 = persistReducer(persistConfig2, urlReducer);
export const store = configureStore({
  reducer: { cart: persistedReducer, urlManager: persistedReducer2 },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
