import React, { useEffect, useState } from 'react'

const SearchFunctionality = () => {
    // First fetch all the name (done)
    //make a seach input (done)
    // search name  input (done)
    // add debouncing and throtling

    // use state for storing the fetchdata
    const [products,setProducts] = useState([])
    // store the search value
    const [search,setSearch] = useState("")
    useEffect(()=>{
        fetchData()
    },[])

    async function fetchData(){
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        setProducts(data)
    } 
    
    // fetchData()
    function handleSeachChange(e){
        setSearch(e.target.value)
    }
    console.log(search)
    const searchFilter = products.filter((product)=> product.title.toLowerCase().includes(search.toLowerCase()))
    
  return (


    <div>
        <input type="text"  name={search} id="" value={search} onChange={handleSeachChange} />

        
        {

        searchFilter.map((product,index)=>{
            return(
                <div key={index}>

                    {product.title} <br />
                    <img src={product.image}alt="" width="200px" height="200px" />

                </div>
            )
        })
        
        }</div>
  )
}

export default SearchFunctionality