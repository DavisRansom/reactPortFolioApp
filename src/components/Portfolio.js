import React from "react";
import SciFiAPI from "./SciFiAPI";
import OhSnap from "./OhSnap";
import ShadyMarketPlace from "./ShadyMarketPlace";


function Portfolio() {
  return (
    <section id="portfolio">
        <h2>Portfolio</h2>
        <ShadyMarketPlace />
        <OhSnap />
        <SciFiAPI />
    </section>
  );
}

export default Portfolio;