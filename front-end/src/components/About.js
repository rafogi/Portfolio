import React from 'react';
import "./About.css"
import Typewriter from 'typewriter-effect';


function About() {
  return (
    <div className="About">
        <h1>Who is Raffy?</h1>
        <img className="pro-pic" src="https://avatars2.githubusercontent.com/u/68399853?s=460&u=0c0dd963c222d62cd444ceba09a55518acdc30c2&v=4"/>
        <Typewriter
          options={{
          strings: ['Hello World!'],
          autoStart: true,
          loop: true,
  }}
/>
    </div>
  );
}

export default About;
