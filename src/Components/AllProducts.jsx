import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../Context/MyContext'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../Redux/Cartslicers'

const AllProducts = () => {
    const context = useContext(MyContext)
    const [products,setProducts] = useState([])
    const {loading} = context
    // console.log(context)
    const dispatch = useDispatch()
    const cartItems = useSelector(
        store=>store.cart.items
    )
    console.log(cartItems)
    const getAllproducts = async ()=> {
        const res = await fetch("https://fakestoreapi.com/products")
        const data  = await res.json()
        console.log(data)
        setProducts(data)

    }
    useEffect(()=>{
        getAllproducts()
    },[])
    const handleAddItem =(product)=>{
        dispatch(addItem(product))
    }
  return (
    <>
    <button>Cart {cartItems.length}</button>
    <input type="text" />
    <div>
        {
            products.map((product)=>{

            const {image,id,title,category} =product
            return (
                <div key={id}>
                <img src={image} alt={title} width="160px" height="160px" />
                {title}
                <button onClick={()=>handleAddItem(product)}>Add to Cart</button>
                </div>
            )
            }
            )
        }
    </div>
    
    </>
  )
}

export default AllProducts