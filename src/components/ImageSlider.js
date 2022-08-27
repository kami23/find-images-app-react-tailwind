import React from "react";
const ImageSlider = ({ data }) => {
  return (
    <>
      {data ? (
        <div
          className="
        flex
        justify-center
        text-3xl md:text-7xl 
        w-50 h-50 bg-slate-300 md:w-60 md:h-60 md:bg-green-300
        items-center
        drop-shadow-md	
        rounded-md"
        >
          <a href={data.urls.regular} target="_blank" rel="noreferrer">
            <img
              className="cursor-pointer rounded-lg w-full object-contain hover:scale-125"
              src={data.urls.small}
              alt={data.alt_decription}
            />
          </a>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ImageSlider;
