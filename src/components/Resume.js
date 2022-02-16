import React from "react";
import davisCartoon from "./davisCartoon.JPG";

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <img src={davisCartoon} alt="Davis Cartoon" />
      <h3>My Proficiencies</h3>
      <ul>
        <li>HTML, CSS, and JavaScript</li>
        <li>Express and Node.js</li>
        <li>MySQL and MongoDB</li>
        <li>React.js and GraphQL</li>
      </ul>
    </section>
  );
}

export default Resume;
