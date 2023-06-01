import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLink from "./components/imageLinkForm/ImageLinkForm"
import Rank from "./components/rank/Rank"
import "./App.css";
import particlesOptions from "./particles.json";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit} />
      <Navigation/>
      <Logo />
      <Rank />
      <ImageLink />
      {/* <FaceRec /> */}
    </div>
  );
}

export default App;
