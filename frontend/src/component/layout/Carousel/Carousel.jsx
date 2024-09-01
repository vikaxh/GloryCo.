import React, { useState, useEffect } from "react";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
 
  const handleNextSlide = () => {
    setCurrentSlide((currentSlide) => (currentSlide + 1) % images.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((currentSlide) => {
      return currentSlide > 0 ? currentSlide - 1 : images.length - 1;
    });
  
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % images.length);   
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
}, [currentSlide , images]);
  return (
    <div className="carousel">
      <div className="carousel-1"
      style={{width: "100%", 
      height:"100%", 
      display: "flex",
      alignItems:"center"
    }}
      >

      <div 
      style={{width: "60%", 
      height:"auto",
      display: "flex", 
      border: "3px solid red",
      overflow:"hidden"
      }}>
        {images && 
          images.map( i =>(
            <img key={i.id} src={i.url} className='img-slider' 
            style={{translate: `${-100 * currentSlide}%`}}
            />
          ))
        }
        </div>
      </div>


      <button className="left-btn" onClick={handlePreviousSlide}>
        <HiArrowCircleLeft  />
      </button>

      <button className="right-btn" onClick={handleNextSlide}>
        <HiArrowCircleRight />
      </button>
    </div>
  );
};

export default Carousel;
