import React from "react";
const ImageSlider = ({ data }) => {
  return (
    <>
      {data ? (
        <div className="aspect-w-16 aspect-h-9">
          <a href={data.urls.regular} target="_blank" rel="noreferrer">
            <img
              className="cursor-pointer py-1 rounded-lg px-1 inline-block group hover:scale-125"
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
