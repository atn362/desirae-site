import React from "react";
import "./App.css";
import { Header, Contact } from "./components/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

function App() {
  return (
    <div className="App">
      <Header />
      <a href="https://www.cnn.com/2022/04/25/tech/elon-musk-twitter-sale-agreement/index.html">
        <FontAwesomeIcon icon={brands("twitter")} size="6x" fade />
      </a>
      <FontAwesomeIcon
        icon={brands("facebook")}
        size="6x"
        fade
        padding-left="200px"
      />
      <FontAwesomeIcon icon={brands("instagram")} size="6x" />
      <FontAwesomeIcon icon={brands("pinterest")} size="6x" />
      <Contact />
    </div>
  );
}

export default App;
