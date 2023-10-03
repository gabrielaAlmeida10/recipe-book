import React  from "react";
import Menu from "./components/menu/Menu";
import Gallery from "./components/galleryView/Gallery";


import "./App.css";

const App = () => {
  return (
    <div>
      <Menu />
      <div className="filter">Menu filter</div>
      <Gallery className="list"/>
    </div>
  );
};

export default App;
