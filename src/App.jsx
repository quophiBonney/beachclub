import React from "react";
import Splider from "./components/Splider";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Splider />
      <Gallery />
      <About />
    </div>
  );
};

export default App;
