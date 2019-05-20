import React from "react";
import styled from "styled-components";
import { Transition } from "react-spring/renderprops";

const Home = () => {
  const Container = styled.div`
    width: 75%;
    font-family: "Crimson Text", serif;
    padding: 33px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #efefea;
    font-size: 16px;

    position: fixed;
      left: 25vw;
      height: 100vh;
  `;
  return (
    <Container>
      <Transition
        items={Home}
        from={{ opacity: 0, transform: "translate3d(100%,0,0)" }}
        enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
        leave={{ opacity: 0, transform: "translate3d(-50%,0,0)" }}
      >
        {show =>
          show &&
          (props => (
            <div style={props}>
              <h1>Hello There</h1>
              <p>
                I am Andrew Ogle, a full stack web developer, and lover of all
                things nerdy. You can usually find me either coding or drawing.
                I love making cool things, and working with creative people.
                Contact me if you would like to make something awesome together.
              </p>
              <p>
                This Website was built using React, React-Router-Dom,React
                Spring, and Styled Components. For the contact form I used
                Axios, Node, Nodemailer, Express, and Body Parser.
              </p>
            </div>
          ))
        }
      </Transition>
    </Container>
  );
};

export default Home;
