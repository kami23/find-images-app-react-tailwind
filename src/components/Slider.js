import React, { useState, useContext, useEffect, useRef } from "react";
import ImageSlider from "./ImageSlider";
import { ImageContext } from "../App";
import Skeleton from "./Skeleton";
import { GrNext, GrPrevious } from "react-icons/gr";

let count = 0;
let slideInterval;

const Slider = () => {
  const { response, isLoading } = useContext(ImageContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  // const removeAnimation = () => {
  //   slideRef.current.classList.remove("fade-anim");
  // };

  // const pauseSlider = () => {
  //   clearInterval(slideInterval);
  // };

  const startSlider = () => {
    setInterval(() => {
      console.log("Interval triggered");
      handleOnNextClick();
    }, 3000);
  };

  useEffect(() => {
    startSlider();
    // slideRef.current.addEventListener("animationend", removeAnimation);

    // slideRef.current.addEventListener("mouseenter", pauseSlider);
    // slideRef.current.addEventListener("mouseleave", startSlider);

    // return () => {
    //   clearInterval(slideInterval);
    // };
  }, []);

  const handleOnNextClick = () => {
    count = (count + 1) % response.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    count = (count - 1 + response.length) % response.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div
      ref={slideRef}
      className="w-full flex items-center justify-center mt-7"
    >
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnPrevClick}
          >
            <GrPrevious />
          </button>
          <ImageSlider data={response[currentIndex]} />
          {/* <div className="top-1/2 transform -translate-y-1/2 px-3 justify-between items-center">
            <button onClick={handleOnPrevClick}>Previous</button>
            <button onClick={handleOnNextClick}>Next</button>
          </div> */}

          <button
            className="bg-white text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnNextClick}
          >
            <GrNext />
          </button>
        </>
      )}
    </div>
  );
};

export default Slider;
