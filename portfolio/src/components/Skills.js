import React from "react";
import styled from "styled-components";
import { Transition } from "react-spring/renderprops";

const Skills = props => {
  const Container = styled.div`
    width: 75%;
    font-family: "Crimson Text", serif;
    padding: 33px;
    background-color: #efefea;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    position: fixed;
      left: 25vw;
      height: 100vh;
  `;

  return (
    <Container>
      <Transition
        items={Skills}
        from={{ opacity: 0, transform: "translate3d(100%,0,0)" }}
        enter={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
        leave={{ opacity: 0, transform: "translate3d(-50%,0,0)" }}
      >
        {show =>
          show &&
          (props => (
            <div style={props}>
            <h1>Skills:</h1>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>React-Router-Dom</li>
                <li>JavaScript ES6</li>
                <li>NodeJs</li>
                <li>Jest</li>
                <li>CSS</li>
                <li>LESS</li>
                <li>HTML</li>
              </ul>
            </div>
          ))
        }
      </Transition>
    </Container>
  );
};

export default Skills;
