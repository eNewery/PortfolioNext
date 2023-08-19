"use client"
import React, { useContext } from 'react'
import { MiContexto } from './context'

const Sidebar = () => {
  const context = useContext(MiContexto)
  function bioPage() {
    context.setPreviousContent(context.content)
    context.setContent("bio")
  }
  function homePage() {
    context.setPreviousContent(context.content)
    context.setContent("home")
  }
  function projectsPage() {
    context.setPreviousContent(context.content)
    context.setContent("projects")
  }
  return (
    <div className='sideContainer'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <div onClick={bioPage} className='sidebarLink bio'><div className='sidebarBio'></div></div>
        <div onClick={homePage} className='sidebarLink home'><div className='sidebarHome'></div></div>
        <div onClick={projectsPage} className='sidebarLink projects'><div className='sidebarProjects'></div></div>
    </div>
  )
}

export default Sidebar