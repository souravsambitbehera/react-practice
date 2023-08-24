import React, { useEffect, useState } from 'react'

const ProductsData = () => {
    const[products,setProducts]= useState([])
    const[cartItem,setCartItem]= useState(0)
    useEffect(()=>{
     async function  getProducts(){
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        console.log(data)
        setProducts(data)
      }
      getProducts()
    },[])

  return (
    <div>
      <h2>Our Products</h2>   <h4>cart {cartItem}</h4>
    {
      products.map(product=>{
        return (
          <div key={product.id}>
          <p>{product.title}</p>
          <img src={product.image} alt={product.title} width="150px" height="150px" />
          <button onClick={()=>{setCartItem(cartItem+1)}}>Add To Cart</button>
        </div>
        )
        
      })
    }
    </div>
  )
}

export default ProductsData