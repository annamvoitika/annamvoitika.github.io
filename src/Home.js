import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "./img/anna3.jpg";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img src={profilepic} className="profilepic"></img>
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "I am Anna Maria Voitika",
            "I am a software developer",
            "Work in London / remote",
            "Extraverted introvert",
            "Capricorns rule",
          ]}
          speed={100}
          eraseDelay={400}
        />
      </div>
    );
  }
}
export default Home;
