import React from 'react';
import "./ProjectList.css";


function ProjectList(props) {
  return (
    <div className="project-article">
            <header className="projHead">
            <a href={props.url}><h3>{props.name}</h3></a>
            </header>
            <img className="project-image" src={props.picture} alt="projpic"/>
            <p>{props.description}</p>
    </div>
  );
}

export default ProjectList;