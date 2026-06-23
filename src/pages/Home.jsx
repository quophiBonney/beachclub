import React from "react";
import Splider from "../components/Splider";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Catchy from "../components/Catchy";
import MenusComponent from "../components/Menus";

const Home = () => {
  return (
    <>
      <Splider />
      <Gallery />
      <MenusComponent />
      <Catchy />
      <About />
    </>
  );
};

export default Home;
