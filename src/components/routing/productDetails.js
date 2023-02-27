import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    const {productId} = useParams();
    console.log(productId);
    // https://randomuser.me/api/
    const [productDetails,setProductDetails] = useState();
    const fetchProduct = async () => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchProduct();
    },[productId])
  return (
    <div>ProductDetails</div>
  )
}
