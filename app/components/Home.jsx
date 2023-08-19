"use client";
import { useRef, useEffect, useContext } from "react";
import React from "react";
import { MiContexto } from "./context";

const Home = () => {
  const context = useContext(MiContexto);
  useEffect(() => {
    const ES = document.querySelector(".ES");
    const EN = document.querySelector(".EN");
    if (context.language === "ES") {
      ES.classList.add("selectedLanguage")
      EN.classList.remove("selectedLanguage")
    }
    if (context.language === "EN") {
      EN.classList.add("selectedLanguage")
      ES.classList.remove("selectedLanguage")
    }
  }, [context.language])
  
  return (
    <div className="homeContainer">
      <div className="homeAvatar hover-trigger show-spiral"></div>
      <div className="animation-container">
        
        <div className="languageBtnContainer">
          <button
            className="languageBtn ES"
            onClick={() => context.setLanguage("ES")}
          >
            ES
          </button>
          <button
            className="languageBtn EN"
            onClick={() => context.setLanguage("EN")}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
