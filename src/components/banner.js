
import { v4 as uuid } from "uuid";
import Carousel from "./carousel";
import "../styles/banner.scss";
import { useEffect, useState } from "react";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        className: "center",
        centerMode: true,
        centerPadding: "60px",

    };
    const [flashSale, setFlashSale] = useState([]);
    const data = ["https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-1.jpg&w=1920&q=100",
        "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
        "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100"]
    const saleImg = "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-2.jpg&w=1200&q=100";

    const flashSaleUrl = "https://res.cloudinary.com/cliqtick/raw/upload/v1676876027/react-class/ecomm/onSale_zyim9y.json";
    const fetchFlashSales = async () => {
        try {
            const res = await fetch(flashSaleUrl);
            const result = await res.json();
            console.log(result);
            setFlashSale(result);
        } catch (error) {
            console.log(error)
        }
    }

    // fetchFlashSales();

    useEffect(() => {
        fetchFlashSales();
    }, [])
    const flashSaleSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        className: "center",
        centerMode: true,
        centerPadding: "60px",

    };
    return (
        <div className="banner-container">
            <Carousel settings={settings}>
                {data.map(e => {
                    return (
                        <div key={uuid()} className="banner-slide-container">
                            <img src={e} className="banner-img-slide" />
                        </div>
                    )
                })}
            </Carousel>
            {/* <div className="flexBox">
                <img className="saleImg" src={saleImg} />
                <div>
                    <h1>Flash Sale</h1>
                    <Carousel settings={flashSaleSettings}>
                        {flashSale.map(e => {
                            return (
                                <div key={uuid()} className="flashSale-container">
                                    <div className="flexBox">
                                        <img className="flashSale-img" src={e.small_pictures[0].url} />
                                        <div>
                                            <p className="flashSale-name">{e.name}</p>
                                            <div className="flashSale-price-container">
                                                <p className="flashSale-salePrice">${e.price[0]}</p>
                                                <p className="flashSale-price">${e.price[1]}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>

            </div> */}
        </div>
    )
}
export default Banner;