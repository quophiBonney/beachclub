import React from "react";
import Splider from "../components/Splider";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Catchy from "../components/Catchy";

const Home = () => {
  return (
    <>
      <Splider />
      <Gallery />
      <Catchy/>
      <About />
    </>
  );
};

export default Home;
