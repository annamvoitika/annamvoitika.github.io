import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import apppic from "./img/plentyofdish.png";
import storypic from "./img/article.png";
import soon from "./img/soon.png";
import PlentyOfDish from "./PlentyOfDish.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const styles = {
  cardImage: {
    objectFit: "cover",
    height: "100%",
  },
};
const routes = [
  {
    path: "/plentyofdish",
    component: PlentyOfDish,
  },
];

function Project() {
  return (
    <div className="Project">
      <div class="card-deck">
        <Card style={{ width: "10rem", height: "17rem" }}>
          <Card.Img variant="top" src={apppic} style={styles.cardImage} />
          <Card.Body>
            <Card.Title>Plenty of Dish</Card.Title>
            <Card.Text>
              A dating web application for single foodies ready to mingle
            </Card.Text>
            <Router>
              <Button variant="primary">
                <Link
                  className="project-link"
                  to="/plentyofdish"
                  target="_blank"
                >
                  View Project
                </Link>
                <Switch>
                  <Route path="/plentyofdish">
                    <PlentyOfDish />
                  </Route>{" "}
                </Switch>{" "}
              </Button>
            </Router>
          </Card.Body>
        </Card>

        <Card style={{ width: "10rem", height: "17rem" }}>
          <Card.Img variant="top" src={soon} style={styles.cardImage} />
          <Card.Body>
            <Card.Title>Project</Card.Title>
            <Card.Text>To be updated</Card.Text>
            <Button variant="primary">View Project</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "10rem", height: "17rem" }}>
          <Card.Img variant="top" src={storypic} style={styles.cardImage} />
          <Card.Body>
            <Card.Title>Career Change Article</Card.Title>
            <Card.Text>
              My experience switching careers at 26 during a global pandemic
            </Card.Text>
            <Button variant="primary">
              <a
                className="project-link"
                href="https://medium.com/@anna.voitik/i-changed-careers-and-i-loved-it-journey-into-software-engineering-37b9ed3c238e"
                target="_blank"
              >
                View Story
              </a>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Project;
