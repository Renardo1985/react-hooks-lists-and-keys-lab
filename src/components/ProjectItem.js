import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techItems = technologies.map((ele, index)=>{return <span key = {index}>{ele}</span>})
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techItems}
      </div>
    </div>
  );
}

export default ProjectItem;
