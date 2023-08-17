"use client"
import React, { useContext } from "react";
import { MiContexto } from "./context";

const Bio = () => {
  const context = useContext(MiContexto)
  return (
    <div className="bioContainer">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <section className="sectionBio bioInfoSection">
        <h1>Ulises Rodriguez</h1>
        <p>
{context.textLanguage.map(item => item.bioPresentation)}
        </p>
        <button>{context.textLanguage.map(item => item.bioPresentationBtn)}</button>
      </section>
      <section className="sectionBio bioEducationSection">
        <h1>{context.textLanguage.map(item => item.bioEducation)}</h1>
        <ul>
          <li>
            <div>
              <h2>Coderhouse | Desarrollo Web (Ene 2022)</h2>
              <p>
                HTML, CSS (CSS Flexbox, CSS Grids, Keyframes, MediaQueries
                [Responsive Design]), SASS, Bootstrap, Git, Github, SEO
              </p>
            </div>
          </li>
          <li>
            <div>
              <h2>Coderhouse | JavaScript (May 2022)</h2>
              <p>
                Array, DOM, Storage, JSON, Promises, Async, jQuery, AJAX, JSON y
                Fetch
              </p>
            </div>
          </li>
          <li>
            <div>
              <h2>Coderhouse | React.js (Sep 2022)</h2>
              <p>
                Components, Events, Routing, Context, Redux Toolkit y Firebase
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="sectionBio sectionSkills">
        <h1>Skills</h1>
<div className="icons">{context.icons.map(item => (
        <div class="icon-wrapper">
        <a
          href={item.documentation}
          target="_blank"
        >
          <i class={item.iconClass}></i>
        </a>
        <span class="icon-text">{item.iconName}</span>
      </div>
      ))}</div>
      </section>
    </div>
  );
};

export default Bio;
