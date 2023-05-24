import React, { useEffect, useState } from 'react'

const ChallengheTwo = () => {
    const[value,setValue] = useState([]);
    useEffect(()=>{
        fetch("https://reqres.in/api/users")
        .then(res=>res.json())
        .then(data=>{console.log(data.data)
            setValue(data.data)})
    },[])
  return (
    <>
        {
            value.map(item=>{
                return(
                    <div key={item.id}>
                        <img src={item.avatar} alt=""/>
                        <b>Avatar name is {item.first_name} {item.last_name}</b>
                    </div>
                )
            })
        }
    </>
  )
}

export default ChallengheTwo