import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectList from "./ProjectList";
import "./Project.css";
import { Spring } from 'react-spring/renderprops';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const url = "/projects";
    axios.get(url)
    .then((data) => {
      
      setProjects(data.data)
    })
  }, []);
  
  console.log(projects);
  if (!projects.length) {
    return null;
  }

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
    <Spring
    from={{opacity:0, marginTop: -500}}
    to={{opacity:1, marginTop: 0}}
    > 
      {props => (
      <div style={props}>
    <section className="container">
      {PL}
    </section>
    </div>
    )}
 </Spring> 
  )
}