import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      let elem = [...state.wishlist].find((elem) => elem._id == action.payload._id)
      if (elem) {
        elem.count++
      } else {
        state.wishlist = [...state.wishlist, { ...action.payload._id, count: 1 }]
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter((elem) => elem._id !== action.payload._id)
      localStorage.setItem("basket", JSON.stringify(state.wishlist))

    },
    removeAllFromwishlist: (state, action) => {
      state.wishlist = []
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist))

    }
  },
})

export const { addToWishlist, removeFromWishlist, removeAllFromwishlist } = wishlistSlice.actions

export default wishlistSlice.reducer