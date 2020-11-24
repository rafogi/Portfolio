import React from 'react';
import "./ProjectList.css";


function ProjectList(props) {
  return (
    <div className="project-article">
            <header>
            <h2>{props.name}</h2>
            <a href="#">GITHUB</a>
            </header>
            <img classname="project-image" src={props.picture} alt="projpic"/>
            <p>{props.description}</p>
    </div>
  );
}

export default ProjectList;