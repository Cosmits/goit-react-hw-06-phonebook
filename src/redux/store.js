// import { combineReducers, createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


// import { contactsReducer } from './contactsReducer';

// const rootReducer = combineReducers({
//   contacts: contactsReducer
// });

// const persistConfig = {
//   key: 'root',
//   storage,
// //  blacklist: ['contacts'],
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const enhancer = devToolsEnhancer();
// export const store = createStore(persistedReducer, enhancer);
// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);