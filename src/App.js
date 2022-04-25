import React from "react";
import "./App.css";
import { Header } from "./components/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

function App() {
  return (
    <div className="App">
      <Header />
      <FontAwesomeIcon icon={solid("user-secret")} size="6x" />
      <a href="https://www.cnn.com/2022/04/25/tech/elon-musk-twitter-sale-agreement/index.html">
        <FontAwesomeIcon icon={brands("twitter")} size="6x" />
      </a>
      <FontAwesomeIcon icon={brands("facebook")} size="6x" />
      <FontAwesomeIcon icon={brands("instagram")} size="6x" />
      <FontAwesomeIcon icon={brands("pinterest")} size="6x" />
      <FontAwesomeIcon icon={brands("snapchat")} size="6x" />
    </div>
  );
}

export default App;
