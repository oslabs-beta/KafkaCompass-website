import React from "react";
import Card from "./Cards";
import DariaMordvinov from "./static/DariaMordvinov.jpg";
import KevinDooley from "./static/KevinDooley.png";
import Ryan from "./static/Ryan.png";
import Jason from "./static/Jason.jpg"
import Dison from "./static/Dison.jpg"
import Cat from "./static/cat.jpg";

const AboutUs = () => {
  const team = [
    {
      name: "Daria Mordvinov",
      img: DariaMordvinov,
      description: "Software Engineer",
      github: "https://github.com/DariaMordvinov",
      linkedin: "https://www.linkedin.com/in/dariamordvinov/"
    },
    {
      name: "Kevin Dooley",
      img: KevinDooley,
      description: "Software Engineer",
      github: "https://github.com/kjdooley1",
      linkedin: "https://www.linkedin.com/in/kjdooley1/"
    },
    {
      name: "Dison Ruan",
      img: Dison,
      description: "Software Engineer",
      github: "https://github.com/fattyduck123",
      linkedin: "https://www.linkedin.com/in/dison-ruan-2b484953/"
    },
    {
      name: "Jason Kuyper",
      img: Jason,
      description: "Software Engineer",
      github: "https://github.com/jasonkuyper",
      linkedin: "https://www.linkedin.com/"
    },
    {
      name: "Ryan Zarou",
      img: Ryan,
      description: "Software Engineer",
      github: "https://github.com/rzarou",
      linkedin: "https://www.linkedin.com/"
    }
  ];
  return (
    <div className="font-mono py-20">
      <h3 className="page-title">Meet the team</h3>
      <div className="about-body drawer-content flex-wrap justify-center">
        <Card team={team} />
      </div>
    </div>
  );
};

export default AboutUs;
