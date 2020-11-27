import React from 'react';
import { Spring } from 'react-spring/renderprops';
import "./Skills.css";

function Skills() {
  return (
    <section className="skills-container">
    <h1>Skills</h1>
    <Spring 
    from={{opacity:0, marginLeft:-500}}
    to={{opacity:1,marginLeft:-0}}
    > 
      {props => (
        <div style={props} className="skills">
          <h2>Web Development</h2>
          <h3>Languages</h3>
          <ul className="skill-ul">
            <li>JavaScript</li>
            <li>Ruby</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>C/C++</li>
          </ul>
          <h4>Frameworks</h4>
          <ul className="skill-ul">
            <li>React</li>
            <li>JQuery</li>
            <li>NodeJs</li>
            <li>RubyOnRails</li>
            <li>ExpressJS</li>
            <li>PHP</li>
            <li>XAMPP</li>
            <li>Bootstrap</li>
          </ul>
          <h4>Databases</h4>
          <ul className="skill-ul">
            <li>PostgresSql</li>
            <li>MySql</li>
            <li>MongoDB</li>
          </ul>
        </div>
      )}
     </Spring> 
     </section>
  );
}

export default Skills;