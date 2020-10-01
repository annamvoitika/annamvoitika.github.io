import React from "react";
import { render } from "@testing-library/react";

function Contacts() {
  return (
    <div className="Contacts">
      <ul className="ContactMe">
        <li>
          <a className="contact-link" href="http://google.com">
            Download CV &#127803;
          </a>
        </li>
        <li>
          <a className="contact-link" href="mailto:anna.voitik@gmail.com?">
            Email me &#9997;
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
