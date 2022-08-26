import React, { useState, useContext } from "react";
import ImageSlider from "./ImageSlider";
import { ImageContext } from "../App";
import Skeleton from "./Skeleton";

const Slider = () => {
  const { response, isLoading } = useContext(ImageContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnPrevClick = () => {
    setCurrentIndex(currentIndex - 1);
  };
  const handleOnNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="">
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <ImageSlider data={response[currentIndex]} />
          <div className="top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
            <button onClick={handleOnPrevClick}>Previous</button>
            <button onClick={handleOnNextClick}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
