import React from 'react';
import styled from 'styled-components';

const Skills = (props) => {
    const skillsContainer = styled.div`
    width: 60%;
    font-family: "Crimson Text", serif;
    padding: 33px;
    display: flex;
    flex-direction: column;
    justify-content: center;
   
    background-color: #efefea;
    font-size: 16px;
  `;
    return ( 
        <skillsContainer>
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
        </skillsContainer>
     );
}
 
export default Skills;