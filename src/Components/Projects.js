import React from "react";
import ProjectBox from "./ProjectBox";
import NewsletterImage from "../images/BONO.png";
import RogfreeImage from "../images/Google.png";
import TindogImage from "../images/TindogImage.png";
import NetflicImage from "../images/Netflic.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={NetflicImage} projectName="Netflic" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="BONO" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="Google" />
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
      </div>
    </div>
  );
};

export default Projects;
