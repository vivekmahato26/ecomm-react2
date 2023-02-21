import { useState, useRef, useEffect } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import "../styles/carousel.scss";

const Carousel = () => {
    const [current, setCurrent] = useState(0)
    const widthSpan = 100.1
    const data = [ "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-1.jpg&w=1920&q=100",
     "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-2.jpg&w=1920&q=100",
     "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-3.jpg&w=1920&q=100"]

    const prev = () => {
        let newPosition = current;
        if (newPosition > 0) {
            newPosition = newPosition - 1;
        } else {
            newPosition = data.length - 1;
        }
        translateFullSlides(newPosition);
        setCurrent(newPosition);

    }
    const next = () => {
        let newPosition = current;
        if (newPosition < data.length - 1) {
            newPosition = newPosition + 1;
        } else {
            newPosition = 0;
        }
        translateFullSlides(newPosition);
        setCurrent(newPosition);

    }
    const translateFullSlides = (newPosition) => {
        let toTranslate = -widthSpan * newPosition;
        for (var i = 0; i < data.length; i++) {
            let elem = document.getElementById(`carouselitem` + i);
            elem.style.transform = `translateX(` + toTranslate + `%)`;
        }
    }
    return (
        <div className="carousel-container">
            <div className="carousel-body" id="carousel-body">
                {data.map((e, index) => {
                    return (
                        <div id={`carouselitem` + index} className="slide-container">
                            <img id="img" src={e} className="slide" />
                        </div>
                    )
                })}
            </div>
            <BsChevronLeft className="slide-arrow left-arrow" onClick={prev} />
            <BsChevronRight className="slide-arrow right-arrow" onClick={next} />
            <div style={{display:"flex",justifyContent:"center"}}>
                {data.map((e, index) => {
                    return (
                        <div style={{fontSize:"5rem"}} onClick={() => { setCurrent(index); translateFullSlides(index) }}>
                            .
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel;