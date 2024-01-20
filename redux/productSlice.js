import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  productData: [],
  userInfo: null,
  orderData: [],
  favouriteData: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //For addtoCart
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item?.id === action.payload.id
      );

      // Product already exists in the cart, update quantity
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },

    //For Increase quantity

    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item?.id === action.payload.id
      );
      existingProduct && existingProduct.quantity++;
    },

    //For Decrease quantity

    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item?.id === action.payload.id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },

    //For Delete Product

    deleteCartProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item?.id !== action.payload
      );
    },

    //For ResetCart
    resetCart: (state) => {
      state.productData = [];
    },

    //for add to favourite
    addToFavourite: (state, action) => {
      const existingProduct = state.favouriteData.find(
        (item) => item?.id === action.payload.id
      );

      // Product already exists in the cart,
      if (existingProduct) {
        state.favouriteData = state.favouriteData.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.favouriteData.push(action.payload);
      }
    },

    //For Delete Favourite Product

    deleteFavouriteProduct: (state, action) => {
      state.favouriteData = state.favouriteData.filter(
        (item) => item?.id !== action.payload
      );
    },

    //For ResetFavourite Products
    resetFavourite: (state) => {
      state.favouriteData = [];
    },

    //for add user
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },

    //for remove user
    deleteUser: (state) => {
      state.userInfo = null;
    },

    // //For add order detail

    // addOrder: (state, action) => {
    //   const existingProduct = state.favouriteData.find(
    //     (item) => item?.id === action.payload.id
    //   );

    //   if (existingProduct) {
    //     state.orderData.push(action.payload);
    //   } else {
    //     state.orderData = action.payload;
    //   }
    // },

    // resetOrder: (state) => {
    //   state.orderData = [];
    // },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteCartProduct,
  resetCart,
  addToFavourite,
  deleteFavouriteProduct,
  resetFavourite,
  addUser,
  deleteUser,
  addOrder,
  resetOrder,
} = productSlice.actions;
export default productSlice.reducer;
