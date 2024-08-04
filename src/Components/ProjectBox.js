import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    RPSDesc:
      "Rock, Paper, Scissors Game This project is a simple implementation of the classic Rock, Paper, Scissors game using HTML, CSS, and JavaScript. The game features a user interface where the user can input their choice, and it displays the result of the game after comparing the user's choice with a randomly generated computer choice.",
    RPSGithub: "https://github.com/BeniKiambote10/Rock_Paper_scissor",
    RPSWebsite: "https://main.dc74i1b8xmoi8.amplifyapp.com/",

    GoogleDesc:
      "Google Homepage Recreation This project is a beginner-level exercise aimed at recreating the Google homepage using HTML, CSS, and JavaScript.",
    GoogleGithub: "https://github.com/BeniKiambote10/Google-Homepage",
    GoogleWebsite: "https://main.d1vi0jtnsdeokz.amplifyapp.com/",

    BONODesc:
      "This project is a simple e-commerce website featuring a home page with a hero image or video, a products page displaying 12 products, and a contact page with a form. The website is designed to be responsive for various screen sizes",
    BONOGithub: "https://github.com/BeniKiambote10/Ecom_Project_Beni",
    BONOWebsite: "https://main.d2ldhyoznida2j.amplifyapp.com/index.html",

    NetflicDesc:
      "This application displays a list of movies similar to the one entered by the user, using the TMDb (The Movie Database) API. The application allows the user to select a movie and then presents a list of movies that share similarities with the selected movie.",
    NetflicGithub: "https://github.com/BeniKiambote10/netflic_app/tree/main",
    NetflicWebsite: "https://netflic-app.onrender.com/",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
