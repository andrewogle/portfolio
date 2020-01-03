import React from "react";
import navImage from "../images/navImage2.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
position:fixed;
  background-image: url(${navImage});
  background-size: 100%;
  background-repeat: none;
  background-position: center;
  background-attachment: fixed;
  background-color:black;
  height: 100vh;
  width: 25%;+
  text-align: center;

`;
const NavLinks = styled.div`
  color: #f7f9cf;
  font-family: "Ubuntu", sans-serif;
  margin-top: 50px;
  
  a {
    text-decoration: none;
    font-family: "Ubuntu", sans-serif;
    color: #f7f9cf;
    margin-left: 10px;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  &:hover {
    background-color: black;
    color: #e27689;
  }
`;
const Tagline = styled.div`
  color: #eded23;
  font-family: "Roboto Slab", serif;
  padding-top: 100px;
  font-size: 20px;
`;
const NavBar = props => {
  return (
    <Nav>
      <Tagline>
        <h1>Andrew Ogle</h1>
        <h3>Full Stack Web Developer.</h3>
        <h4>Maker of things.</h4>
      </Tagline>
      <NavLinks>
        <i className="fas fa-home" />
        <Link to={"/"}>Home</Link>
      </NavLinks>
      <NavLinks>
        <i className="fas fa-images" />
        <Link to={"/portfolio"}>Portfolio</Link>
      </NavLinks>
      <NavLinks>
        <i className="fas fa-toolbox" />
        <Link to={"/skills"}>Skills</Link>
      </NavLinks>
      <NavLinks>
        <i className="fas fa-envelope" />
        <Link to={"/Contact"}>Contact</Link>
      </NavLinks>
    </Nav>
  );
};

export default NavBar;
