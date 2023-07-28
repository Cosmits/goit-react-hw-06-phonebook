import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


import { contactsReducer } from './contactsReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer
});

const persistConfig = {
  key: 'root',
  storage,
//  blacklist: ['contacts'], 
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const enhancer = devToolsEnhancer();
export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);