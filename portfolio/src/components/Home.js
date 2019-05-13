import React from "react";
import styled from "styled-components";

const Home = () => {
  const Container = styled.div`
    width: 60%;
    font-family: "Crimson Text", serif;
    padding: 33px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #d6d4d5;
    background-color: #dbe8ff;
    font-size: 16px;
  `;
  return (
    <Container>
      <h1>Hello There</h1>
      <p>
        I am Andrew Ogle, a full stack web developer, and lover of all things
        nerdy. You can usually find me either coding or drawing. I love making
        cool things, and working with creative people. Contact me if you would
        like to make something awesome with me.
      </p>
    </Container>
  );
};

export default Home;
