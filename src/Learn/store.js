import { configureStore } from "@reduxjs/toolkit";
import ButtonSlice from "./ButtonSlice";

const store = configureStore({
    reducer:{
        button:ButtonSlice,
    }
})
export default store