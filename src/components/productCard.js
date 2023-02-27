import { useContext, useEffect, useState } from "react";
import "../styles/productCard.scss";
import { addToCart, removeFromCart } from "../utils/cartManagement";
import {GrFormAdd,GrFormSubtract} from "react-icons/gr"

import cartContext from "../context/cartContext";

const ProductCard = ({ product }) => {

    const {cart,setCart} = useContext(cartContext);
    const [prodQty,setProdQty] = useState(0);

    useEffect(()=>{
        const cartProd = cart.items.filter(e => e.id === product.id);
        if(cartProd.length) {
            setProdQty(cartProd.qty);
        }
    },[cart])


    const baseUrl = "https://chawkbazar.vercel.app/_next/image?url=";
    return (<div className="productCard-body">
        <img className="productCard-img" src={baseUrl + product.image.thumbnail + "&w=384&q=100"} />
        <p className="productCard-name">
            {product.name}
        </p>
        <p className="productCard-desc">{product.description}</p>
        <div className="productCard-price-container">
            <p className="productCard-sale-price">${product.sale_price}</p>
            {product.price && <p className="productCard-price">${product.price}</p>}
        </div>
        <button onClick={() => setCart(removeFromCart(product,cart))}><GrFormSubtract/></button>
        <span className="product-qty">{prodQty}</span>
        <button onClick={() => setCart(addToCart(product,cart))}><GrFormAdd/></button>
    </div>)
}

export default ProductCard;