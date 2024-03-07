import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../app/users/userSlice.js';

export const store = configureStore({
 reducer: {user: userReducer},
 middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
 }),
})

