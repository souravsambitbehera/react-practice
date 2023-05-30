import React, { useEffect, useState } from 'react'


const people = [
    "Shashi Koshy",
    "Dhriti Taneja",
    "Dipa Mishra",
    "Ansh Thakkar",
    "Lakshmi Thaker",
    "Sushila Matthai",
    "Shresth Nigam",
    "Bhavana Biswas",
    "Vasudha Mangat",
    "Priya Saran"
  ];
const ChallengeEight = () => {
    const[search,setSearch] = useState('');
    const[searchResult,setSearchResult] =useState([])

    function HandelChange(e){
        setSearch(e.target.value)
    }
    useEffect(()=>{
        const result = people.filter(value=>value.toLowerCase().includes(search.toLowerCase()));
        setSearchResult(result);
    },[search])

  return (
    <div>
        <input type="text" placeholder='search' onChange={HandelChange} />
        {
            searchResult.map(item=>
               <p>{item}</p> )
        }
    </div>
  )
}

export default ChallengeEight