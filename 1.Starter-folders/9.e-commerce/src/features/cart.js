import { createSlice } from "@reduxjs/toolkit";
import { products } from "./products";

const initialState = {
  cartItems: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    createCartItem: (state, action) => {
      console.log(action);
      state.cartItems.push(action.payload);
    },
    updateItemFromSelect: (state, action) => {
      state.cartItems.find((el) => el.id === action.payload.id).quantity = Number(action.payload.value);
    },
  },
});

export function addOneToCart(action) {
  return function (dispatch, getState) {
    const storeState = getState();

    const isAlreadyPresent = storeState.cart.cartItems.find((el) => el.id === action);

    if (!isAlreadyPresent) {
      const itemToAdd = storeState.products.items.find((el) => el.id === action);

      const newCartItem = {
        ...itemToAdd,
        quantity: 1,
      };

      dispatch(createCartItem(newCartItem));
    }
  };
}

export const { createCartItem, updateItemFromSelect } = cart.actions;
export default cart.reducer;
