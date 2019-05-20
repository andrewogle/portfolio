import React, { Component } from "react";
import styled from "styled-components";


import Portfolio from "./Portfolio.js";
import irsr from "../images/IRSR.png";
import bubl from "../images/bubl.png";
import instaClone from "../images/instaClone.png";
import uiProject from "../images/uiProject.png";

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          source: irsr,
          altText: "international rual school report",
          blurb:
            "This was the first project that I worked on as a member of a team. We were given two weeks to build a system for schools in rual areas to report supply issues. I was the teams front end engineer. The technologies that I used were, react, redux, react-router, axios, Less/css ",
          projectLink:
            "https://github.com/pt-pilot-buildweek-rural-school-report/irsr-web-app/tree/andrew-ogle",
          webPage: "https://international-rural-school-report.netlify.com"
        },
        {
          source: bubl,
          altText: "bubl app",
          blurb:
            "Bubl was the second time that I had worked as a member of a team. This time I was the back end engineer. The technologies that I used for this project were, Node, Knex, Sqlite3, jsonWebToken, Bcrypt, Express, and Jest",
          projectLink:
            "https://github.com/bubl-application/back-end/tree/andrew-ogle",
          webPage: "https://bubl-app.netlify.com/about"
        },
        {
          source: instaClone,
          altText: "instagram clone ",
          blurb:
            "This project was done with react, and reactstrap. It is an Instagram clone that I built for school. The login page is not a real login page and only requires that some value is added to the username and password fields ",
          projectLink: "https://github.com/andrewogle/React-Insta-Clone ",
          webPage: "https://modest-visvesvaraya-9564a2.netlify.com/ "
        },
        {
          source: uiProject,
          altText: "user interface project ",
          blurb: "For this project I used vanilla javascript, Less/css, and HTML  ",
          projectLink: "https://github.com/andrewogle/User-Interface-Project-Week ",
          webPage: "https://suspicious-bohr-71834d.netlify.com/ "
        }
      ]
    };
  }
  render() {
    const Container = styled.div`
      width: 75%;
      font-family: "Crimson Text", serif;
      padding: 33px;
      background-color: #efefea;
      font-size: 16px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      position: absolute;
      left: 25vw;
      height: 150%;
    `;
    return (
      <Container>

        {this.state.projects.map(p => {
          return (
            <Portfolio
              key={p.projectLink}
              source={p.source}
              altText={p.altText}
              blurb={p.blurb}
              projectLink={p.projectLink}
              webPage={p.webPage}
            />
          );
        })}
      </Container>
    );
  }
}

export default PortfolioContainer;
