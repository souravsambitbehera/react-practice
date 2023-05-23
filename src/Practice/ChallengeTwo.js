import React from 'react'
import { useState } from 'react'

const contries = [
    {name:"India", value:"In",Citis:["Delhi","Mumbai"]},
    {name:"Pakistan", value:"Pk",Citis:["Lahore","Karachi"]},
    {name:"Bangladesh", value:"In",Citis:["Dhaka","Chittagoong"]},

]

const ChallengeTwo = () => {
    const[value,setValue] = useState('')
  return (
    <div>
        <select name="" id="">
        {
            contries.map(contrie =>
                <>
                <option value={contrie.name} onSelect={(e)=>{setValue(e.target.value)}}>
                    {contrie.name}</option>

                  </>  
            )
        }
        </select>
       <p>{value}</p>
    </div>
  )
}

export default ChallengeTwo