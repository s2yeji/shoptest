import { createSlice } from '@reduxjs/toolkit';

let stock = createSlice({
  name: 'stock',
  initialState: {
    pdstock: [10, 50, 30, 5, 4], // {}, [], string...가 들어갈 수 있음
  },
});

export default stock;
