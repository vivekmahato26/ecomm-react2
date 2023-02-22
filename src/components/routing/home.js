import React from 'react';
import Products from '../products';
import Carousel from '../carousel2';

export default function Home() {

  const bestSellers = "https://chawkbazar.vercel.app/api/products_best_seller.json"
  const newArrivals = "https://chawkbazar.vercel.app/api/products_new_arrival.json"
  return (
    <div>
      <Carousel />
      <Products title={"Best Sellers"} url={bestSellers} />
      <Products title={"New Arrival"} url={newArrivals} />
    </div>
  )
}
