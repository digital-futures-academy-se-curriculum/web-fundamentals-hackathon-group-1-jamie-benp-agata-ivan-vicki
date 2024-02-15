import { useState } from "react";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";
import Block01 from "./Block01";
import Block02 from "./Block02";
import Block03 from "./Block03";
import SocialIcons from "./SocialIcons";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Block01 />
        <Block02 />
        <Block03 />
        <SocialIcons />
      </div>
      <p className="copyRight"> © DF Cinemas - 2021 -</p>
    </>
  );
}

export default App;
