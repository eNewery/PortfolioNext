"use client"
import React, { createContext, useState, useEffect } from 'react';
const MiContexto = createContext();
const MiContextoProvider = ({ children }) => {
  const [content, setContent] = useState("home")  
  const [projectsTitle, setProjectsTitle] = useState("maybelline")  
const [projectsContent, setProjectsContent] = useState([])
useEffect(() => {
  const maybellineProjectLink = document.querySelector(".maybellineProjectLink");
  const pizzaProjectLink = document.querySelector(".pizzaProjectLink");
  const sliderProjectLink = document.querySelector(".sliderProjectLink");

if (projectsTitle === "maybelline") {
  const data = [
    {
title: "Maybelline",
image: "maybellineImage",
description:"Maybelline es un E-Commerce totalmente responsive creado a partir de la API Make-Up y, haciendo honor a la api, Maybelline. Un E-Commerce creado con Nextjs, utilizando librerias como Emailjs para las órdenes de compra. Una API sin dudas muy completa, y una aplicación aún más.",
languages: "Nextjs"
  }]
  setProjectsContent(data)
maybellineProjectLink === null ? console.log("Maybelline es null") : maybellineProjectLink.classList.add("selectedProject")
pizzaProjectLink === null ? console.log("Pizza es null") : pizzaProjectLink.classList.remove("selectedProject")
sliderProjectLink === null ? console.log("Slider es null") : sliderProjectLink.classList.remove("selectedProject")
}
if (projectsTitle === "slider") {
  const data = [{
    title: "Slider",
    image: "sliderImage",
    description:"Slider Button, es un proyecto 100% comentado el cual tiene la mera intención de mostrar un botón de Slide totalmente funcional el cual puede ser reutilizado para cualquier ocasión que el cliente desee. En este caso, ha sido utilizado para mostrar mi información personal o medios de contacto, pero puede ser utilizado para cualquier interacción.",
    languages: "Nextjs"
}]
  setProjectsContent(data)
pizzaProjectLink === null ? console.log("Pizza es null") : pizzaProjectLink.classList.remove("selectedProject")
maybellineProjectLink === null ? console.log("Maybelline es null") : maybellineProjectLink.classList.remove("selectedProject")
sliderProjectLink === null ? console.log("Slider es null") : sliderProjectLink.classList.add("selectedProject")
}
if (projectsTitle === "don hornero") {
  const data = [{
    title: "Don hornero",
    image: "donhorneroImage",
    description:"Pizzeria Don Hornero es un proyecto que parte por la idea de trabajar en equipo con otras personas para recoger algo de lo más cercano a una experiencia laboral. Fue realizado con un equipo que contaba con backend devs, qa testers y frontend devs. Fue realizado en Nextjs y tiene la intención de ser un menú de comida rápida que envía las órdenes de compra al gmail deseado gracias a Emailjs.",
    languages: "Nextjs"
  }]
  setProjectsContent(data)
sliderProjectLink === null ? console.log("Slider es null") : sliderProjectLink.classList.remove("selectedProject")
maybellineProjectLink === null ? console.log("Maybelline es null") : maybellineProjectLink.classList.remove("selectedProject")
pizzaProjectLink === null ? console.log("Pizza es null") : pizzaProjectLink.classList.add("selectedProject")
}
}, [projectsTitle])

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
      <MiContexto.Provider value={{content, setContent, projectsTitle, setProjectsTitle, projectsContent}}>
        {children}
      </MiContexto.Provider>
    );
  };
  export { MiContexto, MiContextoProvider };