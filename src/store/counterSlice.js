import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    handleIncrement: (state, action ) => {
      {action.payload ? state.count += action.payload : state.count++}
    },
    handleDecrement: (state, action) => {
      {action.payload ? state.count -= action.payload : state.count--}
      
    },
  },
}); 

export const {handleIncrement, handleDecrement} = counterSlice.actions;

export default counterSlice.reducer; 