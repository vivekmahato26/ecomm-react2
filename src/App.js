import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Carousel from "./components/carousel2";
import Products from "./components/products";
import { useState } from "react";

function App() {
  const [cart,setCart] = useState();
  console.log(cart)
  const bestSellers = "https://chawkbazar.vercel.app/api/products_best_seller.json"
  const newArrivals = "https://chawkbazar.vercel.app/api/products_new_arrival.json"
  return (
    <div>
      <Navbar />
      {/* <Banner/> */}
      <Carousel/>
      <Products setCart={setCart} title={"Best Sellers"} url={bestSellers}/>
      <Products setCart={setCart} title={"New Arrival"} url={newArrivals}/>
    </div>
  );
}

export default App;
