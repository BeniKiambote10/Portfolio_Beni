import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Beni Kiambote</b> and I am from Congo, Central
            Africa. I'm a <b>Coding Apprentcie</b> at Road 2 hire pursuing{" "}
            <b>a career in the technical field</b>. <br />
            I love to create original projects with beautiful designs, you can
            check out some of my work in the projects section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="Postman" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
      </div>
    </>
  );
};

export default About;
