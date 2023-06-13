import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contactsSlice";
import {persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer,} from 'redux-persist';
import { filterReduser } from "./filterSlice";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'contacts',
	storage,
}

const persistedReducer = persistReducer(persistConfig, contactsReduser);

export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter: filterReduser,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            },
        });
    },
});

export const persistor = persistStore(store);