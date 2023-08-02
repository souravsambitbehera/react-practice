import React,{useMemo,useEffect} from 'react'

const UseMemoHooks = () => {
    useEffect(()=>{
        console.log("hy")
    },[])
    useMemo(()=>{
        console.log("hello")
    },[])
   
  return (
    <div>UseMemoHooks</div>
  )
}

export default UseMemoHooks