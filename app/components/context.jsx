"use client"
import React, { createContext, useState, useEffect } from 'react';
const MiContexto = createContext();
const MiContextoProvider = ({ children }) => {
  const [content, setContent] = useState("home")  
  useEffect(() => {
const bio = document.querySelector(".bio")
const home = document.querySelector(".home")
const projects = document.querySelector(".projects")
if (content === "bio") {
bio.classList.add("selectedLink")
home.classList.remove("selectedLink")
projects.classList.remove("selectedLink")
}
if (content === "home") {
  bio.classList.remove("selectedLink")
home.classList.add("selectedLink")
projects.classList.remove("selectedLink")
}
if (content === "projects") {
  bio.classList.remove("selectedLink")
home.classList.remove("selectedLink")
projects.classList.add("selectedLink")
}
}, [content])
  
    return (
      <MiContexto.Provider value={{content, setContent}}>
        {children}
      </MiContexto.Provider>
    );
  };
  export { MiContexto, MiContextoProvider };