import React from "react";
import ProjectBox from "./ProjectBox";
import BONOImage from "../images/BONO.png";
import GoogleImage from "../images/Google.png";
import RPSImage from "../images/RPS.png";
import NetflicImage from "../images/Netflic.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={NetflicImage} projectName="Netflic" />
        <ProjectBox projectPhoto={BONOImage} projectName="BONO" />
        <ProjectBox projectPhoto={GoogleImage} projectName="Google" />
        <ProjectBox projectPhoto={RPSImage} projectName="RPS" />
      </div>
    </div>
  );
};

export default Projects;
