import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import ProductCard from "./productCard";

import "../styles/products.scss";
import { Link } from "react-router-dom";

const Products = ({ title, url}) => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            const tempData = data.map(e => {
                return {
                    ...e,
                    id: uuid().split("-").join(""),
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
            setProducts(tempData);
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
                    return <Link to={"/product/"+e.id}>
                        <ProductCard product={e} key={uuid()} />
                    </Link>
                })}
            </div>
        </div>
    )
}

export default Products;