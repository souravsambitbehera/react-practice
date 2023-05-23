import React, { useReducer } from 'react'

const intialState = {count:0};
function reducerfunction(state,action){
    switch(action.type){
        case "join":
            return {count:state.count+1};
        case "exit":
            return {count:state.count-1};
    }
}


const ReducerDemo = () => {
    const[state,dispatch]=useReducer(reducerfunction,intialState)
  return (
    <div>
        <p>Live stream watching people {state.count}</p>
        <button  onClick={()=>{dispatch({type:"join"})}} >Join the live stream </button>
        <button onClick={()=>{dispatch({type:"exit"})}}>Exit the live stream</button>
    </div>
  )
}

export default ReducerDemo