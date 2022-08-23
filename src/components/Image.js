import React from "react";

const Image = ({ data }) => {
  return (
    <div className="row-span-2">
      <a href={data.urls.regular} target="_blank" rel="noreferrer">
        <img
          className="cursor-pointer py-1 rounded-lg px-1 inline-block w-full group hover:scale-125"
          src={data.urls.small}
          alt={data.alt_decription}
        />
      </a>
    </div>
  );
};

export default Image;
