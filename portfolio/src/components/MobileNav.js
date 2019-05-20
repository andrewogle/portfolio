import React from "react";
import navImage from "../images/navImage2.jpg";
import styled from "styled-components";




const Tagline = styled.div`
  color: #eded23;
  font-family: "Roboto Slab", serif;
  padding: 25px;
  font-size: 20px;
  background-image: url(${navImage});
  background-size: 100%;
  background-repeat: none;
  background-position: center;
  background-attachment: fixed;
  text-align: center;
 
`;
const MobileNav = props => {
  return (
    
      <Tagline>
        <h1>Andrew Ogle</h1>
        <h3>Full Stack Web Developer.</h3>
        <h4>Maker of things.</h4>
      </Tagline>
      
   
  );
};

export default MobileNav;
