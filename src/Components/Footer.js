import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Beni Kiambote</h4>
      <h4>Copyright &copy; 2023 BK</h4>
      <div className="footerLinks">
        <a href="https://github.com/BeniKiambote10" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/beni-kiambote/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailTo:benikiambote02@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
