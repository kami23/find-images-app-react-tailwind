import React, { useContext } from "react";
import Image from "./Image";
import { ImageContext } from "../App";
import Skeleton from "./Skeleton";

const Images = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);
  return (
    <>
      <h1 className="text-center mt-6 mb-3 underline text-2xl">
        Results for {searchImage || "cats"}
      </h1>
      <div
        className="w-full sm:columns-1 md:columns-3 lg:columns-4 xl:columns-6 gap-0
     max-w-7xl mx-auto px-4"
      >
        {isLoading ? (
          <Skeleton item={10} />
        ) : (
          response.map((data, key) => <Image key={key} data={data} />)
        )}
      </div>
    </>
  );
};

export default Images;
