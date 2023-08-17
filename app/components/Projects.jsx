import React, { useContext } from "react";
import { MiContexto } from "./context";
import Link from "next/link";
const Projects = () => {
  const context = useContext(MiContexto);
  return (
    <div className="projectsContainer">
      <div className="projectsBar">
        <div className="projectBarContainer">
          <p
            className="maybellineProjectLink selectedProject"
            onClick={() => context.setProjectsTitle("maybelline")}
          >
            Maybelline
          </p>
          <p
            className="sliderProjectLink"
            onClick={() => context.setProjectsTitle("slider")}
          >
            Slider
          </p>
          <p
            className="pizzaProjectLink"
            onClick={() => context.setProjectsTitle("don hornero")}
          >
            Don Hornero
          </p>
          <p className='usersProjectLink' onClick={() => context.setProjectsTitle("do users")}>Do Users</p>
        </div>
      </div>
      <div className="projectContent">
        {context.projectsContent.map((item) => (
          <div class="project-card">
            <h1>{item.title}</h1>
            <div class="image-container">
              <div className={item.image} alt="Imagen 1"></div>
              <div class="narrow-images">
                <div className={item.image2} alt="Imagen 2"></div>
                <div className={item.image3} alt="Imagen 3"></div>
              </div>
            </div>
            
            {context.language === "ES" ? <p>{item.descriptionES}</p> : <p>{item.descriptionEN}</p>}
            <div className="product-languages">
              <h1>Herramientas:</h1>
              <p>{item.languages}</p>
            </div>
            <div className="projectLinks"><a className="projectLink ghub" target="_blank" href={item.links.ghub}></a><a className="projectLink repo" target="_blank" href={item.links.repo}></a></div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Projects;
