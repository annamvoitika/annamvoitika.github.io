import React from "react";
import ReactPlayer from "react-player";
import main from "./img/main.png";
import chat from "./img/chat.png";
import trello from "./img/trello.png";
import Social from "./Social.js";
import Contacts from "./Contacts.js";

function PlentyOfDish() {
  return (
    <div className="Dish">
      <Social />
      <Contacts />
      <div className="Welcome">
        <hgroup>
          <h1>Plenty Of Dish</h1>
          <h2 className="DishName">Are you single? Are you a foodie? </h2>
          <h3 className="DishName">
            Find your pear-fect soulmate with Plenty of Dish dating app
          </h3>
        </hgroup>
      </div>
      <section className="ProjectDescription">
        <p>
          Plenty of Dish is a Node.JS application built in a team of 4 as a
          graduation project from Makers Academy bootcamp.
        </p>
        <p>
          Our team had 2 weeks to come up with an app concept, plan the MVP,
          build and deploy the app.
        </p>
        <p>This was our first experience working with the below tech stack</p>
      </section>

      <section className="TechStack">
        <h1 className="TechStack">Tech Stack:</h1>
      </section>

      <div className="Tech">
        <div className="AppExperience">
          <section className="AppOne">
            <ul>
              <li>JavaScript</li> <br />
              <li>Node.JS</li> <br />
              <li>HTML</li> <br />
              <li>CSS</li> <br />
              <li>Bootstrap</li> <br />
            </ul>
          </section>
          <section className="AppTwo">
            <ul>
              <li>MongoDB</li> <br />
              <li>Jest</li>
              <br />
              <li>Heroku</li>
              <br />
              <li>Cypress</li>
              <br />
              <li>Handlebars</li>
              <br />
            </ul>
          </section>
          <section className="AppThree">
            <ul>
              <li>Trello</li> <br />
              <li>Miro</li>
              <br />
              <li>Photoshop</li>
              <br />
            </ul>
          </section>
          <section className="AppFour">
            <ul>
              <li>Daily stand-ups</li> <br />
              <li>Scrum ceremonies</li>
              <br />
              <li>Pair-programming</li>
              <br />
            </ul>
          </section>
        </div>
      </div>

      <div className="MainImage">
        <img className="MainImageFish" src={main} />
      </div>

      <div className="ProjectDescr">
        <p>
          From encrypted and safe user authentication, to profile building and
          image uploading capabilities, live chat and matching logic,
        </p>
        <p>
          this app MVP offers a stylish user experience sprinkled with
          egg-cellent food puns.
        </p>
      </div>

      <div className="MainImage">
        <img className="MainImageFish" src={chat} />
      </div>

      <div className="ProjectVideo">
        <h1>Watch our presentation</h1>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=CQ8OEecxpG8&t=490"
          light={trello}
        />
      </div>
    </div>
  );
}

export default PlentyOfDish;
