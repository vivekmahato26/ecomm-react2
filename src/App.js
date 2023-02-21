import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Carousel from "./components/carousel2";
import Products from "./components/products";
import { useState } from "react";
import CartContext from "./context/cartContext";


import { Route,Routes } from "react-router-dom";
import Home from "./components/routing/home";
import About from "./components/routing/about";
import Shop from "./components/routing/shop";

function App() {
  const [cart, setCart] = useState({
    items: [],
    totalQty: 0,
    totalPrice: 0
  });
  console.log(cart)
  const bestSellers = "https://chawkbazar.vercel.app/api/products_best_seller.json"
  const newArrivals = "https://chawkbazar.vercel.app/api/products_new_arrival.json"
  return (
    <div>
      <Navbar />
      {/* <Banner/> 
      <Carousel />
      <CartContext.Provider value={{ cart, setCart }}>
        <Products title={"Best Sellers"} url={bestSellers} />
        <Products title={"New Arrival"} url={newArrivals} />
      </CartContext.Provider> */}
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
