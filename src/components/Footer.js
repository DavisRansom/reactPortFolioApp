import React from "react";
import linkedInPic from "./Linkedin-logo-png-white.png";
import gitHubPic from "./kindpng_1280233.png";
import reactLogo from './reactlogo.svg';

function Footer() {
  return (
    <footer>
      <h2>Davis Ransom</h2>
      <h4>Web Developer</h4>
      <p>619.204.2957</p>
      <p>davis.ransom.tech@gmail.com</p>

      <a href="https://www.linkedin.com/in/davis-ransom-499b31210/">
        <img src={linkedInPic} alt="Linked In" />
      </a>

      <a href="https://github.com/DavisRansom">
        <img src={gitHubPic} alt="GitHub" />
      </a>

      <img src={reactLogo} alt="React Logo" />
      <p>Email me to check out my resume!</p>

      <p>Created by Davis Ransom in January 2022</p>
    </footer>
  );
}

export default Footer;
