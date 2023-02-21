import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import ProductCard from "./productCard";

import "../styles/products.scss";
const Products = ({ title, url,setCart }) => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            const tempData = data.map(e => {
                console.log(e);
                return {
                    ...e,
                    gallery: e.gallery.map(g => {
                        return {
                            ...g,
                            thumbnail: g.thumbnail.split("/").join("%2F"),
                            original: g.original.split("/").join("%2F")
                        }
                    }),
                    image: {
                        ...e.image,
                        thumbnail: e.image.thumbnail.split("/").join("%2F"),
                        original: e.image.original.split("/").join("%2F")
                    }

                }
            })
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
        // fetch(url).then(res =>res.json()).then(data=>setProducts(data)).catch(e=>console.log(e));
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div className="products-body">
            <p className="products-title">{title}</p>
            <div className="products-grid">
                {products.map(e => {
                    return <ProductCard setCart={setCart} product={e} key={uuid()} />
                })}
            </div>
        </div>
    )
}

export default Products;