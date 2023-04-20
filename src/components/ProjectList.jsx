import React from "react";
import "./ProjectList.css";
import { Link } from "react-router-dom";
import Avator from "./Avator";

const ProjectList = ({ projects }) => {
  // console.log(projects);

  return (
    <div className="project-list">
      {projects.length === 0 && <p className="error">No projets yet!</p>}
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <h4> {project.name}</h4>
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            <ul>
              {project?.assignedUsersList?.map((user) => (
                <li key={user.photoURL}>
                  <Avator src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
