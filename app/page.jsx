"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useContext } from 'react'
import { MiContexto } from './components/context'
import Home from './components/Home'
import Bio from './components/Bio'
import Projects from './components/Projects'
export default function Page() {
const context = useContext(MiContexto)
  return (
    <main className="mainContainer">
 
    {context.content === "home" ? <Home/> : context.content === "bio" ? <Bio/> : context.content === "projects" ? <Projects/> : console.log("Algo ha fallado")}
    </main>
  )
}
