import React, { useContext } from "react";
import { ImageContext } from "../App";

const Result = () => {
  const { searchImage } = useContext(ImageContext);

  return (
    <h1 className="text-center mt-6 mb-3 underline text-2xl">
      Results for {searchImage || "cats"}
    </h1>
  );
};

export default Result;
