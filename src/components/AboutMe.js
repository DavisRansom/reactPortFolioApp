import React from "react";
import davisHappy from "./davisHappy.jpg";

function AboutMe() {
  return (
    <section id="aboutMe">
      <img src={davisHappy} alt="Davis Happy" />
      <h2>About Me</h2>
      <p>
        I am a web developer from Huntington Beach, California, living in San
        Diego. I am married to my lovely wife, with our first baby on the way. I
        like video games, Korean Barbeque, writing, building Legos, watching
        movies, recording my podcasts, and learning. I earned my Masters in
        Cross-Cultural Education and Bachelors in Psychology and I am a unique
        prospect as an employee, since I am positioned as an expert in certain
        areas such as coaching, leadership, team building, business management, and
        setting and achieving goals, but I am also a relative newb (graduating
        from UCSD Full-stack Bootcamp on March 7th 2022!) in technology and I am
        willing to do nearly anything to get my foot in the door. I know once I
        do, that the sky is the limit!
      </p>
    </section>
  );
}

export default AboutMe;
