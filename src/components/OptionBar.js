import React from "react";
import maysonary from "../assets/masonary3.png";
import slider from "../assets/slider.png";

const OptionBar = () => {
  return (
    <div className="w-full grid md:grid-cols-2 w-28 bg-white ml-auto gap-1">
      <button className="border-2 w-20 h-12">
        <img className="objec-cover" src={maysonary} alt="masonary icon" />
      </button>
      <button className="border-2 w-10 h-10">
        <img className="object-fit" src={slider} alt="slider icon" />{" "}
      </button>
    </div>
  );
};

export default OptionBar;
