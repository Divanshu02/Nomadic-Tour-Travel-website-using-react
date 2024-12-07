import { configureStore } from "@reduxjs/toolkit";
import countSliceReducer from "./Slices/CountSlice";

const store=configureStore({
    reducer:countSliceReducer
})
export default store;   