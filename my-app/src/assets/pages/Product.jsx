import React from 'react'
import { useParams } from 'react-router-dom'
import product from '../json/products'

function Product() {
    let {navid} = useParams()
    let selectedProduct=product.find((v,i)=>v.id == navid)
    console.log("selectedProduct",selectedProduct);
    
  return (
    <>

<img src={selectedProduct.image} alt="" />
    <h1>{selectedProduct.name}</h1>
    <h1>{selectedProduct.price}</h1>

    </>
  )
}

export default Product