import React from "react";
import "./ProjectDetails.css";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import ProjectSummary from "./ProjectSummary";
import ProjectComments from "./ProjectComments";

const ProjectDetails = () => {
  const { id } = useParams();
  const { document, error } = useDocument("projects", id);

  if (error) {
    return <div className="error">{error}</div>;
  }
  if (!document) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="project-details">
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </div>
  );
};

export default ProjectDetails;
