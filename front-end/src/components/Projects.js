import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectList from "./ProjectList";
import "./Projects.css";
import { Spring } from 'react-spring/renderprops';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("api/projects")
    .then((data) => {
      
      setProjects(data.data)
    })
  }, []);


  
  if (!projects.length) {
    return null;
  }

  console.log(projects);

  const PL = projects.map((project) => {
    return (
      <ProjectList
        key={project.id}
        id={project.id}
        name={project.projectName}
        description={project.description}
        picture={project.picture}
        date={project.monthYear}
        url={project.url}
      />
    );
  });

  return (
    <section className="container">
      <h1>Projects</h1>
      <Spring 
      from={{opacity:0,}}
      to={{opacity:1,}}
      > 
        {props => (
        <div style={props} className="spr">
        {PL}
        </div>
      )}
      </Spring> 
    </section>
  )
}