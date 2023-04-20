import React from "react";
import "./ProjectDetails.css";

import Avator from "../../components/Avator";
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const ProjectSummary = ({ project }) => {
  const { deleteDocument } = useFirestore("projects");
  const { user } = useAuthContext();

  const naviagte = useNavigate();

  const handleClick = (e) => {
    deleteDocument(project.id);
    naviagte("/");
  };

  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p>By {project.createdBy.displayName}</p>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.deatils}</p>
        <h4>project assigned to:</h4>
        <div className="assigned-users">
          {project?.assignedUserList?.map((user) => (
            <div key={user.id}>
              <Avator src={user.photoURL} />
            </div>
          ))}
        </div>
        {user.uid === project.createdBy.id && (
          <button className="btn" onClick={handleClick}>
            Mark as complete
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectSummary;
