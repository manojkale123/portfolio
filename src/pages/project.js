import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard"; 
import "./project.scss";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Project() {


  const projects = [
    {
      image:
        "https://img.freepik.com/free-vector/hand-drawn-flat-design-digital-detox-illustration_23-2149323807.jpg?t=st=1731179906~exp=1731183506~hmac=8fcde52e54d0ef58ca482d0b0625d3d09a5ae7911b057294a196c2805424ee0e&w=740",
      title: "Project Title 1",
      description:
        "This is a description of the project. It can include details about the technologies used.",
      buttonText: "View Project",
    },
    {
      image:
        "https://img.freepik.com/free-vector/no-time-concept-illustration_114360-4290.jpg?t=st=1731179720~exp=1731183320~hmac=f3ae7547a4a6292abd2b0bcd420537624bf112e485872e4ffdee5f73207d4b8d&w=740",
      title: "Project Title 2",
      description:
        "This is a description of the project. It can include details about the technologies used.",
      buttonText: "View Project",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/stay-home-working-from-home-concept-illustration_206846-20.jpg?w=740",
      title: "Project Title 3",
      description:
        "This is a description of the project. It can include details about the technologies used.",
      buttonText: "View Project",
    },
  ];

  const [loading, setLoading] = useState(true);


  //for api call.
  // useEffect(() =>{

  //   const fetchData = async () => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //     const data = await res.json()
  //     setLoading(false);
  //     console.log("Fetch data",data);
  //     toast.success("Data retrived sucessfully");
  //   }
  //   fetchData();
  // },[])

  return (
    <div className="project-container">
      <ToastContainer />
     {
      projects.map((project,index) => (
        <ProjectCard
        key = {index}
        image = {project.image}
        title = {project.title}
        description={ project.description}
        buttonText={project.buttonText}
        />
      ))
     }
    </div>
  );
}

export default Project;