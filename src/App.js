import React, { createContext, useState } from "react";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import SearchedField from "./components/SearchedField";
import Images from "./components/Images";
import useAxios from "./hooks/useAxios";
import OptionBar from "./components/OptionBar";
import Slider from "./components/Slider";

// Create ContexT
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );
  console.log(response);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };
  return (
    <ImageContext.Provider value={value}>
      <Jumbotron>
        <SearchedField />
      </Jumbotron>
      {/* <Images /> */}
      <Slider />
    </ImageContext.Provider>
  );
}

export default App;
