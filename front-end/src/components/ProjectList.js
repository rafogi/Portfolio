import React from 'react';
import ProgressiveImage from "react-progressive-graceful-image";
import ModalImage from "react-modal-image";
import "./ProjectList.css";


function ProjectList(props) {

  return (
      
      <div className="project-article">
        <a className="proj-link" href={props.url}>
        <h3 className="projHead">{props.name}</h3>

        <ProgressiveImage src={props.picture} >
            {(src) =>
                <img className="project-image" src={props.picture} alt="projpic"/>
            }
        </ProgressiveImage>

        <div className="notes">
            <p className="proj-desc">{props.description}</p>
        </div>
        </a>
    </div>
  );
}

export default ProjectList;