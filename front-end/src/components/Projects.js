import React, { useEffect, useState } from "react";
import axios from "axios";

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


  return (
    <h1>projects</h1>
  )
}