import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  // const eachProject = projects.map((proj)=>{
  //   return (
  //   <key = {proj.key} name= {proj.name}/>
  //   )
    
  // })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
       {projects.map((project)=>{
        return(
          <ProjectItem 
          key={project.id}
          name = {project.name}
          about = {project.about}
          technologies={project.technologies}
        />
       )})}
        
        </div>
    </div>
  );
}

export default ProjectList;
