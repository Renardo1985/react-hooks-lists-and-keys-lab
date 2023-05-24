import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectItems = projects.map((ele) => {
    return <ProjectItem key = {ele.id} name = {ele.name} about = {ele.about} technologies={ele.technologies}/>  
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;
