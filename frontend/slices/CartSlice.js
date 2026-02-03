import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;

      const existing = state.items.find(
        (i) => i.id === item.id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart(state, action) {
      state.items = state.items.filter(
        (i) => i.id !== action.payload
      );
    },

    updateQty(state, action) {
      const { id, qty } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item && qty >= 1) item.quantity = qty;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQty,
} = cartSlice.actions;

export default cartSlice.reducer;
