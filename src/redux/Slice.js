import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const filtered = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = filtered;
      localStorage.setItem("cart", JSON.stringify(filtered));
    },
    clearAllItems: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    }
  }
});

export const { addItem, removeItem, clearAllItems } = cartSlice.actions;
export default cartSlice.reducer;