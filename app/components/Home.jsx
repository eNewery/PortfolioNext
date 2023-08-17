"use client"
import { useRef, useEffect, useContext } from "react";
import React from 'react'
import { MiContexto } from "./context";

const Home = () => {
const context = useContext(MiContexto)
  return (
    <div className='homeContainer'><div className="homeAvatar hover-trigger show-spiral">     
</div><div className="animation-container">   <div className='languageBtnContainer'>
        <button className='languageBtn' onClick={() => context.setLanguage("ES")}>ES</button>
        <p>/</p>
        <button className='languageBtn' onClick={() => context.setLanguage("EN")}>EN</button>
    </div></div></div>
  )
}

export default Home