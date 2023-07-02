import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  color: { name: "blue" },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (cart, action) => {
      const product = cart.products.find(
        (product) =>
          product.id === action.payload.id &&
          product.color.name === action.payload.color.name &&
          product.grind.name === action.payload.grind.name &&
          product.weight.name === action.payload.weight.name
      );
      if (product) {
        //yani ghablan to cart bude baiad tedadesh ziad she
        product.quantity++;
      } else {
        //yani ghablan to cart nabude baiad ezafe beshe
        cart.products.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (cart, action) => {
      const product = cart.products.find(
        (product) =>
          product.id === action.payload.id &&
          product.color.name === action.payload.color.name &&
          product.grind.name === action.payload.grind.name &&
          product.weight.name === action.payload.weight.name
      );
      product.quantity++;
    },
    decrementQuantity: (cart, action) => {
      const product = cart.products.find(
        (product) =>
          product.id === action.payload.id &&
          product.color.name === action.payload.color.name &&
          product.grind.name === action.payload.grind.name &&
          product.weight.name === action.payload.weight.name
      );
      if (product.quantity === 0) {
        product.quantity = 0;
      } else {
        product.quantity--;
      }
    },
    removeItem: (cart, action) => {
      cart.products = cart.products.filter(
        (product) =>
          product.id !== action.payload.id &&
          product.color.name !== action.payload.color.name &&
          product.grind.name !== action.payload.grind.name &&
          product.weight.name !== action.payload.weight.name
      );
    },
    clearCart: (cart) => {
      cart.products = [];
    },
    colorUpdate: (cart, action) => {
      cart.color.name = action.payload;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  colorUpdate,
} = cartSlice.actions;
export default cartSlice.reducer;
