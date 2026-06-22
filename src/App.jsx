import React from "react";
import Splider from "./components/Splider";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Splider />
      <Gallery />
      <About />
      <Footer />
    </div>
  );
};

export default App;
