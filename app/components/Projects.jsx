import React, { useContext } from 'react'
import { MiContexto } from './context'

const Projects = () => {
    const context = useContext(MiContexto)
  return (
    <div className='projectsContainer'>
        <div className="projectsBar"><p className='maybellineProjectLink selectedProject' onClick={() => context.setProjectsTitle("maybelline")}>Maybelline</p>
        <p className='sliderProjectLink' onClick={() => context.setProjectsTitle("slider")}>Slider</p>
        <p className='pizzaProjectLink' onClick={() => context.setProjectsTitle("don hornero")}>Don Hornero</p></div>
    <div className="projectContent">{context.projectsContent.map(item => (
    <div class="project-card">
    <h1>{item.title}</h1>
    <div class={`project-image ${item.image}`}></div>
    <p>{item.description}</p>
  </div>
  
    ))}</div>
    <div></div>
    </div>
  )
}

export default Projects