import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

import SocialLinks from "./components/SocialLinks";
import About from "./components/About";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
    </div>
  );
}

export default App;
