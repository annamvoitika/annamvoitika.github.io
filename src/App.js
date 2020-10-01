import React from "react";
import "./App.css";
import AboutMe from "./Aboutme.js";
import Developer from "./Developer.js";
import Home from "./Home.js";
import Project from "./Project.js";
import Social from "./Social.js";
import Contacts from "./Contacts.js";
import Experience from "./Experience.js";

function App() {
  return (
    <div className="App">
      <Social />
      <Contacts />
      <div className="Welcome">
        <hgroup>
          <h1>Hi! I'm Anna</h1>
          <h2 className="DishName">
            Software Developer and Certified Professional Scrum Master
          </h2>
        </hgroup>
      </div>
      <Home />
      <AboutMe />
      <Developer />
      <h1 className="SkillsAndQ">Skills and Qualifications</h1>
      <Experience />
      <h1 className="MyWork">What I've been working on</h1>
      <Project />
    </div>
  );
}

export default App;
