import React from "react";

import Docplanner from "./Components/Docplanner";
import Box from "./Components/Box";
import Card from "./Components/Card";
import logoDocP from "./Images/1.svg";

import logoDoc from "./Images/2.png";
import logoDocPl from "./Images/21.png";
import "./App.css";

function App() {
  const textBoxArray = [
    {
      tag: "For patients",
      title: "Find a doctor book a visit and solve any health-related doubt",
      select: ["Argentina", "Brazil", "chile"],
      pic: "https://www.docplanner.com/img/screen-marketplace@2x.png"
    },
    {
      tag: "For doctors",
      title: "Save time managing visits and cut no-shows by half",
      select: null,
      pic: "https://www.docplanner.com/img/screen-saas@2x.png"
    }
  ];

  const boxArray = [
    {
      title: "Leader in 10 countries",
      tag:
        "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",
      pic: "https://www.docplanner.com/img/flag.png"
    },
    {
      title: "1.5 million appointments",
      tag: "booked last month",
      pic: "https://www.docplanner.com/img/visits.png"
    },
    {
      title: "30 million unique patients",
      tag: "visit us every month",
      pic: "https://www.docplanner.com/img/patients.png"
    },
    {
      title: "2 million active doctors",
      tag: "trust in our solutions",
      pic: "https://www.docplanner.com/img/doctors.png"
    }
  ];

  const boxCard = [
    {
      title: "Warsaw",
      pic: "https://www.docplanner.com/images/warsaw.png"
    },
    {
      title: "Barcelona",
      pic: "https://www.docplanner.com/images/barcelona.png"
    },
    {
      title: "Istanbul",
      pic: "https://www.docplanner.com/images/istanbul.png"
    },
    {
      title: "Rome",
      pic: "https://www.docplanner.com/images/rome.png"
    },
    {
      title: "Mexico City",
      pic: "https://www.docplanner.com/images/mexico-city.png"
    },
    {
      title: "Curitiba",
      pic: "https://www.docplanner.com/images/curitiba.png"
    }
  ];

  return (
    <div>
      <div>
        <img src={logoDocP} className="logo" alt="Logo" />
        <div className="link">
          <a href=" " className="link1">
            About us
          </a>
          <a href=" " className="link2">
            Career
          </a>
          <a href=" " className="link3">
            Departements
          </a>
        </div>
      </div>

      <div>
        <img src={logoDoc} className="logo1" alt="pic" />
      </div>
      <h3>
        <p className="text">Making the healthcare experience more human</p>{" "}
      </h3>

      <div className="text1">
        <p>
          We want patients to find the perfect doctor and book an appointment in
          the most easy way. The patient journey should be enjoyable, and that's
          why we are always next to them: to help them find the best possible
          care. Anytime, anywhere.
        </p>
        <p>
          We also help doctors to better manage their practice and build their
          online reputation. With our integrated end-to-end solution, doctors
          are able not only to improve their online presence, but also to devote
          their time to what really matters: their patients.
        </p>
      </div>
      <div>
        <Docplanner textBoxArray={textBoxArray} />
      </div>
      <div className="main">
        <div className="main-title">
          <p>The world's</p>
          <p>biggest healthcare platform</p>
          <p className="main-text">
            {" "}
            We work from 6 offices all over the world, bringing Docplanner Group
            to life in almost 20 countries.
          </p>
          <img className="main-logo" src={logoDocPl} alt="pic" />
        </div>

        <Box boxArray={boxArray} />
      </div>

      <div>
        <boxCard boxArray={boxArray} />
      </div>
      <div className="center-title">
        <p className="title3">
          Improve the lives of millions. Change yours forever
        </p>
      </div>
      <div className="center-title">
        <p className="text6">
          {" "}
          than 1000 team mates share our same vision, goals and passion. With
          offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and
          Curitiba, our search for great talent never stops.
        </p>
      </div>
      <div>
        <Card boxCard={boxCard} />
      </div>
      <div class="foot">
        <div>
          <hr />
          <p class="text-foot">
            We are leaders in 10 countries: <a href=" ">Poland</a>,{" "}
            <a href=" ">Turkey</a>,<a href=" ">Spain</a>, <a href=" ">Italy</a>,{" "}
            <a href=" ">Czech Republic</a>, <a href=" ">Mexico</a>,{" "}
            <a href=" ">Colombia</a>, <a href=" ">Brazil</a>,
            <a href=" ">Argentina</a> and <a href=" ">Chile</a>
            This site uses cookies to deliver services in accordance with this
            Privacy Policy. You can specify the conditions for storing or
            accessing cookies on your browser. www.docplanner.com © 2020
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
