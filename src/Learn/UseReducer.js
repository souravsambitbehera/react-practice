import React, { useReducer } from 'react'

const intialState = {count:0}

const reducer = (state,action)=>{
    switch(action.type){
        case  "Increment":
            return {count:state.count+1};
        case "Decrement":
            return {count:state.count-1}
        case "Reset":
            return {count :0}
        default:
            return state;
    }
}


const UseReducer = () => {
    const[state,dispatch] = useReducer(reducer,intialState);
  return (
    <div>
        <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
    <p>the count value is {state.count}</p>
    </div>
  )
}

export default UseReducer