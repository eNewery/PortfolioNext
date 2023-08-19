"use client";
import React, { createContext, useState, useEffect } from "react";
const MiContexto = createContext();
const MiContextoProvider = ({ children }) => {
  const [content, setContent] = useState("home");
  const [previousContent, setPreviousContent] = useState("")
  const [projectsTitle, setProjectsTitle] = useState("maybelline");
  const [projectsContent, setProjectsContent] = useState([]);
  const [icons, setIcons] = useState([]);
  const [language, setLanguage] = useState("EN")
const [textLanguage, setTextLanguage] = useState([])
  useEffect(() => {
const dataES = [{
bioPresentation: "Mi nombre es Ulises Rodriguez, tengo 22 años y comencé mi carrera como Desarrollador Front-End en principios de 2021. Complete mi carrera en Coderhouse e hice cursos de WMedia, Fazt, HolaMundo, MiDudev, entre otros. Mi objetivo es aprender y obtener la mayor cantidad de conocimientos posibles, ya sean los más actuales como los más longevos utilizados en la actualidad. En un futuro planeo estudiar Ingeniería Informática ya que me apasiona el estudio y el aprendizaje, mientras tanto busco trabajar con empresas y/o otros profesionales que tengan las mismas ganas de enseñar como las que yo tengo de aprender. Gracias por visitar mi portfolio!",
bioPresentationBtn: "Contactar",
bioEducation: "Educación"

}]
const dataEN = [{
bioPresentation: "My name is Ulises Rodriguez, I am 22 years old and I started my career as a Front-End Developer in early 2021. I completed my degree at Coderhouse and took courses on WMedia, Fazt, HolaMundo, MiDudev, among others. My goal is to learn and obtain as much knowledge as possible, both the most current and the longest used today. In the future I plan to study Computer Engineering since I am passionate about studying and learning, in the meantime I am looking to work with companies and/or other professionals who will have the same desire to teach as I have to learn. Thanks for visiting my portfolio!",
bioPresentationBtn: "Contact",
bioEducation:"Education"
}]
language === "ES" ? setTextLanguage(dataES) : setTextLanguage(dataEN)
  }, [language])
  
  useEffect(() => {
    const data = [
      {
        iconClass: "devicon-html5-plain",
        documentation: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        iconName: "HTML5",
      },
      {
        iconClass: "devicon-css3-plain",
        documentation: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        iconName: "CSS3",
      },
      {
        iconClass: "devicon-javascript-plain",
        documentation: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        iconName: "JavaScript",
      },
      {
        iconClass: "devicon-jquery-plain",
        documentation: "https://api.jquery.com/",
        iconName: "jQuery",
      },
      {
        iconClass: "devicon-react-original",
        documentation: "https://legacy.reactjs.org/docs/getting-started.html",
        iconName: "React",
      },
      {
        iconClass: "devicon-redux-original",
        documentation: "https://devdocs.io/redux/",
        iconName: "Redux",
      },
      {
        iconClass: "devicon-bootstrap-plain",
        documentation: "https://getbootstrap.com/docs/4.1/getting-started/introduction/",
        iconName: "Bootstrap",
      },
      {
        iconClass: "devicon-tailwindcss-original-wordmark",
        documentation: "https://v2.tailwindcss.com/docs",
        iconName: "Tailwind CSS",
      },
      {
        iconClass: "devicon-github-original",
        documentation: "https://docs.github.com/es",
        iconName: "GitHub",
      },
      {
        iconClass: "devicon-figma-plain",
        documentation: "https://www.figma.com/best-practices/guide-to-developer-handoff/components-styles-and-documentation/",
        iconName: "Figma",
      },
      {
        iconClass: "devicon-nextjs-plain",
        documentation: "https://nextjs.org/docs",
        iconName: "Next.js",
      },
      {
        iconClass: "devicon-firebase-plain",
        documentation: "https://firebase.google.com/docs?hl=es-419",
        iconName: "Firebase",
      },
    ];
    setIcons(data)
  }, []);

  useEffect(() => {
    const maybellineProjectLink = document.querySelector(
      ".maybellineProjectLink"
    );
    const pizzaProjectLink = document.querySelector(".pizzaProjectLink");
    const sliderProjectLink = document.querySelector(".sliderProjectLink");
    const usersProjectLink = document.querySelector(".usersProjectLink");

    if (projectsTitle === "maybelline") {
      const data = [
        {
          title: "Maybelline",
          image: "maybellineImage",
          image2: "maybellineImage2",
          image3: "maybellineImage3",
          descriptionES:
            "Maybelline es un E-Commerce totalmente responsive creado a partir de la API Make-Up y, haciendo honor a la api, Maybelline. Un E-Commerce creado con Nextjs, utilizando librerias como Emailjs para las órdenes de compra. Una API sin dudas muy completa, y una aplicación aún más.",
          descriptionEN: "Maybelline is a fully responsive E-Commerce created from the Make-Up API and, honoring the API, from Maybelline. An electronic commerce created with Nextjs, using libraries such as Emailjs for purchase orders. An API that is undoubtedly very complete, and an application even more so.",
            languages: "NEXT JS | CSS | MAKE UP API ",
          links: {
            ghub: "https://github.com/eNewery/MakeUpShop",
            repo: "https://maybelline-shop.vercel.app/",
          },
        },
      ];
      setProjectsContent(data);
      maybellineProjectLink === null
        ? console.log("Maybelline es null")
        : maybellineProjectLink.classList.add("selectedProject");
      pizzaProjectLink === null
        ? console.log("Pizza es null")
        : pizzaProjectLink.classList.remove("selectedProject");
      sliderProjectLink === null
        ? console.log("Slider es null")
        : sliderProjectLink.classList.remove("selectedProject");
      usersProjectLink === null
        ? console.log("Users es null")
        : usersProjectLink.classList.remove("selectedProject");
    }
    if (projectsTitle === "slider") {
      const data = [
        {
          title: "Slider",
          image: "sliderImage",
          descriptionES:
            "Slider Button, es un proyecto 100% comentado el cual tiene la mera intención de mostrar un botón de Slide totalmente funcional el cual puede ser reutilizado para cualquier ocasión que el cliente desee. En este caso, ha sido utilizado para mostrar mi información personal o medios de contacto, pero puede ser utilizado para cualquier interacción.",
            descriptionEN:"Slider Button, is a 100% commented project which has the mere intention of showing a fully functional Slide button which can be reused for any occasion that the client wishes. In this case, it has been used to show my personal information or means of contact, but it can be used for any interaction.",
            languages: "NEXT JS | CSS",
          links: {
            ghub: "https://github.com/eNewery/Slider-Button",
            repo: "https://slider-blond-beta.vercel.app/",
          },
        },
      ];
      setProjectsContent(data);
      pizzaProjectLink === null
        ? console.log("Pizza es null")
        : pizzaProjectLink.classList.remove("selectedProject");
      maybellineProjectLink === null
        ? console.log("Maybelline es null")
        : maybellineProjectLink.classList.remove("selectedProject");
      usersProjectLink === null
        ? console.log("Users es null")
        : usersProjectLink.classList.remove("selectedProject");
      sliderProjectLink === null
        ? console.log("Slider es null")
        : sliderProjectLink.classList.add("selectedProject");
    }
    if (projectsTitle === "don hornero") {
      const data = [
        {
          title: "Don hornero",
          image: "donhorneroImage",
          image2: "donhorneroImage2",
          image3: "donhorneroImage3",
          descriptionES:
            "Pizzeria Don Hornero es un proyecto que parte por la idea de trabajar en equipo con otras personas para recoger algo de lo más cercano a una experiencia laboral. Fue realizado con un equipo que contaba con backend devs, qa testers y frontend devs. Fue realizado en Nextjs y tiene la intención de ser un menú de comida rápida que envía las órdenes de compra al gmail deseado gracias a Emailjs.",
            descriptionEN:"Pizzeria Don Hornero is a project that starts from the idea of ​​working as a team with other people to gather something that is closest to a work experience. It was done with a team that included backend devs, qa testers and frontend devs. It was made in Nextjs and is intended to be a fast food menu that sends purchase orders to the desired gmail thanks to Emailjs.",
            languages: "NEXT JS | CSS | EMAIL JS",
          links: {
            ghub: "https://github.com/eNewery/Pizzeria",
            repo: "https://pizzeria-don-hornero.vercel.app/",
          },
        },
      ];
      setProjectsContent(data);
      sliderProjectLink === null
        ? console.log("Slider es null")
        : sliderProjectLink.classList.remove("selectedProject");
      maybellineProjectLink === null
        ? console.log("Maybelline es null")
        : maybellineProjectLink.classList.remove("selectedProject");
      usersProjectLink === null
        ? console.log("Users es null")
        : usersProjectLink.classList.remove("selectedProject");
      pizzaProjectLink === null
        ? console.log("Pizza es null")
        : pizzaProjectLink.classList.add("selectedProject");
    }
    if (projectsTitle === "do users") {
      const data = [
        {
          title: "Do Users",
          image: "usersImage",
          image2: "usersImage2",
          image3: "usersImage3",
          descriptionES:
            "Do Users es una aplicación destinada a la creación de usuarios, dichos usuarios son guardados en firebase auth y tienen su propia base de datos, donde pueden guardar sus tareas y verlas cada vez que inicien sesión. Siempre estarán ahí. Un perfecto ejemplo de cómo podría hacer un administrador de productos para un E-Commerce.",
            descriptionEN:"Do Users is an application for the creation of users, these users are saved in firebase auth and have their own database, where they can save their tasks and see them every time they log in. They will always be there. A perfect example of how a product manager for an E-Commerce could do.",
            languages: "NEXT JS | CSS | FIREBASE | AUTH",
          links: {
            ghub: "https://github.com/eNewery/usersTest",
            repo: "https://do-tasks-psi.vercel.app/",
          },
        },
      ];
      setProjectsContent(data);
      usersProjectLink === null
        ? console.log("Users es null")
        : usersProjectLink.classList.add("selectedProject");
      sliderProjectLink === null
        ? console.log("Slider es null")
        : sliderProjectLink.classList.remove("selectedProject");
      maybellineProjectLink === null
        ? console.log("Maybelline es null")
        : maybellineProjectLink.classList.remove("selectedProject");
      pizzaProjectLink === null
        ? console.log("Pizza es null")
        : pizzaProjectLink.classList.remove("selectedProject");
    }
  }, [projectsTitle]);

  useEffect(() => {
    const bio = document.querySelector(".bio");
    const home = document.querySelector(".home");
    const projects = document.querySelector(".projects");
    if (content === "bio") {
      bio.classList.add("selectedLink");
      home.classList.remove("selectedLink");
      projects.classList.remove("selectedLink");
    }
    if (content === "home") {
      bio.classList.remove("selectedLink");
      home.classList.add("selectedLink");
      projects.classList.remove("selectedLink");
    }
    if (content === "projects") {
      bio.classList.remove("selectedLink");
      home.classList.remove("selectedLink");
      projects.classList.add("selectedLink");
    }
  }, [content]);

  return (
    <MiContexto.Provider
      value={{
        content,
        setContent,
        projectsTitle,
        setProjectsTitle,
        projectsContent,
        icons,
        language,
setLanguage,
textLanguage,
setPreviousContent,
previousContent
      }}
    >
      {children}
    </MiContexto.Provider>
  );
};
export { MiContexto, MiContextoProvider };
