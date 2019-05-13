import React from "react";
import navImage from '../images/navImage.jpg';
import styled from 'styled-components';

const Nav = styled.nav`
    background-image: url(${navImage});
    background-size:100%;
    background-repeat: none;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
    width:35%;
   
    margin:auto;
    text-align: center;

    
`;
const NavLinks = styled.div`
    color: black;
    font-family: 'Ubuntu', sans-serif;
    margin-top: 50px;
`;
const Tagline = styled.div`
    color: white;
    font-family: 'Roboto Slab', serif;
    padding-top: 100px;
`;
const NavBar = props => {
  return (
    <Nav>
        <Tagline >
            <h1>Andrew Ogle</h1>
            <h3>Full Stack Web Developer.</h3>
            <h4>Maker of things.</h4>
        </Tagline>
      <NavLinks >
          <h4>Home</h4>
      </NavLinks>
      <NavLinks >
          <h4>Portfolio</h4>
      </NavLinks>
      <NavLinks >
          <h4>Skills</h4>
      </NavLinks>
      <NavLinks >
          <h4>Contact</h4>
      </NavLinks>
      
    </Nav>
  );
};

export default NavBar;
