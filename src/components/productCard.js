import "../styles/productCard.scss";

const ProductCard = ({ product,setCart }) => {
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
        <button onClick={() => setCart(product)}>Add To Cart</button>
    </div>)
}

export default ProductCard;