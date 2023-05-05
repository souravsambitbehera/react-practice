import React, { useState } from 'react'

const ObjectComponent = () => {
    const[value,setValue] = useState(false)
    const[user,setUser]=useState({
        name:"ddddddd",
        age:"",
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
          }
    })
    const HandelUserChange = (e)=>{
        setUser({
            ...user,
            name:e.target.value
        })
    }
    const HandelAgeChange = (e)=>{
        setUser({
            ...user,
            age:e.target.value
        })
    }
    const HandelCityChnage = (e)=>{
        setUser({
            ...user,
            
            artwork:{
                ...user.artwork,
                city:e.target.value
            }
            
        })
    }


  return (
    <div>
        user : <input type="text" name="" value={user.name} id="" onChange={HandelUserChange} /> <br />
        age :<input type="text" name="" id="" onChange={HandelAgeChange} /> <br />
        city : <input type="text" onChange={HandelCityChnage} /> <br />
        img : <input type="text" />
        <p>{user.name} {user.age} {user.artwork.city}</p>
        <button onClick={()=>{setValue(!value)}}>
            {value ? "hide": "show"}
        </button>
        <p>{value && "msg"}</p> 
       
    </div>

  )
}

export default ObjectComponent