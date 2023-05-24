import React from "react";
import { useState } from "react";
const Input=
[
  {
    label: "Menu 1",
  },
  {
    label: "Menu 2",
    submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
  },
  {
    label: "Menu 3",
    submenu: [
      { label: "Sub Menu 1" },
      { label: "Sub Menu 2" },
      { label: "Sub Menu 3" },
      { label: "Sub Menu 4" },
    ],
  },
  {
    label: "Menu 4",
    submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
  },
];
const Repractice = () =>{
    const[data,setData]=useState([])
const submenuValue = Input[data]?.submenu || []

function HandelOnChange(e){
console.log(e.target.value)
setData([e.target.value])

}
    return(
        <>
        <select value={data} name="" id="" onChange={HandelOnChange}>
            {
                Input.map((item,index)=>
                    <option value={index} key={index}>{item.label}</option>
                )
            }
        </select>
        <select name="" id="">
            {
                submenuValue &&
                submenuValue.map((item,index)=><option value="" key={index}>{item.label}</option> )
            }
        </select>
        <p>{data}</p>
        </>
    )
}
export default Repractice