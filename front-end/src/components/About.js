import React from 'react';
import "./About.css"
import { Spring } from 'react-spring/renderprops';

function About() {
  return (
    <div className="About">
      <div className="left-profile">
        <h1>Who is Raffy?</h1>
        <img className="pro-pic" src="https://avatars2.githubusercontent.com/u/68399853?s=460&u=0c0dd963c222d62cd444ceba09a55518acdc30c2&v=4" alt="pro-pic"/>
        <div className="typewriter">
        <h3>Full-Stack Developer</h3>
      </div>
    </div>
      <Spring 
      from={{opacity:0, marginLeft:500}}
      to={{opacity:1, marginLeft:40}}
      > 
      {props => (
      <div style={props}className="right-profile">

        <h2 className="right-title">Summary</h2>
        <p className="profile-desc">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <h2 className="right-title">Hobbies</h2>
        <ul className="profile-hobbies">
          <li>Cycling</li>
          <li>Running</li>
          <li>Golf</li>
          <li>Basketball</li>
        </ul>
      </div>
    )}
 </Spring> 
    </div>
  );
}

export default About;
