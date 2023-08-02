import { createSlice } from "@reduxjs/toolkit";

const ButtonSlice = createSlice({
    name:"button",
    initialState:{
        value:0
    },
    reducers:{
        IncreaseButton:(state,action)=>{
            state.value=state.value+1;
        },
        DecrementButton:(state,action)=>{
            state.value=state.value-1; 
        },
            ResetButton:(state)=>{
                state.value=0;
            }
    }
    
})
export const {IncreaseButton,DecrementButton,ResetButton } = ButtonSlice.actions;

export default ButtonSlice.reducer