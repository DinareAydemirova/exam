import { configureStore } from '@reduxjs/toolkit'
import basketReduce from './slices/basketSlice'
import wishlistReducer from './slices/wishlistSlice'

export const store = configureStore({
  reducer: {
    basket: basketReduce,
    wishlist: wishlistReducer
  },
})