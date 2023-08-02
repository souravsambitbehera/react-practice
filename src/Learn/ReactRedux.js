import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from './store'
import { DecrementButton, IncreaseButton, ResetButton } from './ButtonSlice'

const ReactRedux = () => {
    const value = useSelector(store=>store.button.value)
    const dispatch = useDispatch()
    console.log(value)
    const HandelAddItem = ()=>{
        dispatch(IncreaseButton())
    }
  return (
    <div>
helo {value}
    <button onClick={HandelAddItem}>IncreaseButton</button>
    <button onClick={()=>dispatch(DecrementButton())}>DecrementButton</button>
    <button onClick={()=>dispatch(ResetButton())}>ResetButton</button>

    </div>
  )
}

export default ReactRedux