import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let elem = [...state.basket].find((elem) => elem._id == action.payload._id)
      if (elem) {
        elem.count++
      } else {
        state.basket = [...state.basket, { ...action.payload._id, count: 1 }]
      }
      localStorage.setItem("basket", JSON.stringify(state.basket))
    },
    increase: (state, action) => {
      let elem = [...state.basket].find((elem) => elem._id == action.payload._id)
      elem.count++
      localStorage.setItem("basket", JSON.stringify(state.basket))

    },
    decrease: (state, action) => {
      let elem = [...state.basket].find((elem) => elem._id == action.payload._id)
      elem.count--
      if (elem.count <= 0) {
        state.basket = state.basket.filter((elem) => elem._id !== action.payload._id)
      }
      localStorage.setItem("basket", JSON.stringify(state.basket))

    },
    removeFromBasket:(state, action)=>{
      state.basket = [...state.basket].filter((elem) => elem._id !== action.payload._id)
      localStorage.setItem("basket", JSON.stringify(state.basket))

    },
    removeAllFromBasket:(state, action)=>{
      state.basket=[]
      localStorage.setItem("basket", JSON.stringify(state.basket))

    }
  },
})

export const { removeAllFromBasket, addToBasket, increase, decrease, removeFromBasket } = basketSlice.actions

export default basketSlice.reducer