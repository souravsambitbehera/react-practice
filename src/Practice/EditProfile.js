import React, { useState } from 'react'

const EditProfile = () => {
    
const[firstName,setFirstName] =useState("sourav")
const[lastName,setLastName] =useState("sambit")
const[isEditting,setIsEditting] =useState(true);
  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        setIsEditting(!isEditting)
    }}>
        {
            isEditting ? 
            <>
            <label htmlFor="">FirstName</label>
            <b>{firstName}</b>
            <label htmlFor="">LastName</label>
            <b>{lastName}</b>
            </> :
            <>
            <label htmlFor="">FirstName</label> {" "}
            <input type="text" onChange={(e)=>{setFirstName(e.target.value)}} value={firstName} /> <br />
            <label htmlFor="">LastName</label> {" "}
            <input type="text" onChange={(e)=>{setLastName(e.target.value)}} value={lastName}/> <br />
            </>
        }
        <button type='submit'>{!isEditting ? "Save Profile" : "Edit Profile"}</button>
    
        <p>Hello {firstName} {lastName}</p>

    </form>
  )
}

export default EditProfile