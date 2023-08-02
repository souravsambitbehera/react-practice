import React,{useReducer} from 'react'

function reducer(state,action){
    switch(action.type){
        case "Increment":
            return {age:state.age+1};
        case "Decrement":
            return {age:state.age-1};
        case "Reset":
            return {age:0};
        default:
            return state
    }
}


const UseReducerHooks = () => {
    const[state,dispatch] = useReducer(reducer,{age:23})
  return (
    <div>
        <p>{state.age}</p>
        <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
    </div>
  )
}

export default UseReducerHooks