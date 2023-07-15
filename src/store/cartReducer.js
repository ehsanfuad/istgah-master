import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  color: {},
  weight: {},
  grind: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (cart, action) => {
      const product = cart.products.find(
        (product) =>
          product?.id === action.payload?.id &&
          product?.color?.id === action.payload?.color?.id &&
          product?.grind?.id === action.payload?.grind?.id &&
          product?.weight?.id === action.payload?.weight?.id
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
          product?.id === action.payload?.id &&
          product?.color?.id === action.payload?.color?.id &&
          product?.grind?.id === action.payload?.grind?.id &&
          product?.weight?.id === action.payload?.weight?.id
      );
      if (product) {
        product.quantity++;
      }
    },
    decrementQuantity: (cart, action) => {
      const product = cart.products.find(
        (product) =>
          product?.id === action.payload?.id &&
          product?.color?.id === action.payload?.color?.id &&
          product?.grind?.id === action.payload?.grind?.id &&
          product?.weight?.id === action.payload?.weight?.id
      );
      if (product.quantity === 0) {
        product.quantity = 0;
      } else {
        product.quantity--;
      }
    },
    removeItem: (cart, action) => {
      const { productId, colorId, grindId, weightId } = action.payload;
      const filtereds = cart.products.filter(
        (item) =>
          !(
            item?.id === productId &&
            item?.grind?.id === grindId &&
            item?.weight?.id === weightId &&
            item?.color?.id === colorId
          )
      );
      cart.products = filtereds;
    },
    clearCart: (cart) => {
      cart.products = [];
    },
    colorUpdate: (cart, action) => {
      cart.color = action.payload;
    },
    weightUpdate: (cart, action) => {
      cart.weight = action.payload;
    },
    grindUpdate: (cart, action) => {
      cart.grind = action.payload;
    },
  },
});

export const {
  addToCart,
  removeItem,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  colorUpdate,
  weightUpdate,
  grindUpdate,
} = cartSlice.actions;
export default cartSlice.reducer;
