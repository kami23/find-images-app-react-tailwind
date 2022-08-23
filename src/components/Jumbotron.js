import React from "react";

const Jumbotron = (props) => {
  return (
    <div className="bg-gray-900 flex items-center py-100">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-white text-center text-2xl font-bold mb-4 mt-4">
          Find Images
        </h1>
        {props.children}
      </div>
    </div>
  );
};

export default Jumbotron;
