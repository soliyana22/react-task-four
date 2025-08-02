import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    selectedColor: 'blue', // Default color
  },
  reducers: {
    setSelectedColor: (state, action) => {
      state.selectedColor = action.payload;
    },
  },
});

export const { setSelectedColor } = productSlice.actions; // Explicitly export the action
export default productSlice.reducer; // Export the reducer