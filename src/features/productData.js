import { createSlice } from "@reduxjs/toolkit";
import React from "react";


const initialStateValue=  { }
export const dataSlice = createSlice({
  name: "product",
  initialState: { value:initialStateValue },
  reducers: {
    view: (state, action) => {
      state.value = action.payload;
    },
    addToCart:(state,action)=>{
        state.value=initialStateValue
    }
  },
});

export const {view,addToCart}= dataSlice.actions;
export default dataSlice.reducer;
