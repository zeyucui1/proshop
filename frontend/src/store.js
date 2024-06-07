import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './slices/apislice'
import cartSliceReducer from './slices/cartSlice'
import authSliceReducer from './slices/authslice'
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
})

export default store
