import { configureStore } from "@reduxjs/toolkit";
import Cartslicers from "./Cartslicers";

const store = configureStore({
reducer:{
    cart:Cartslicers
}
})

export default store