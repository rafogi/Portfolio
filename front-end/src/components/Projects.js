import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectList from "./ProjectList";

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
        date={project.monthYear}
        url={project.url}
      />
    );
  });

  return (
    <section classname="container">
      {PL}
    </section>
  )
}