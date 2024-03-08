import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from '../app/users/userSlice.js';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
const rootReducers=combineReducers({user:userReducer});
const persistConfig={
   key:'root',
   storage,
   version:1,
}
const persistedReducer= persistReducer(persistConfig,rootReducers)
export const store = configureStore({
 reducer: persistedReducer,
 middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
 }),
})
export const persistor=persistStore(store);

