import React from 'react';
import styled from "styled-components";



const Portfolio = (props) => {
    const Project = styled.div`
    width: 25%;
    font-family: "Crimson Text", serif;
    padding: 33px;
    background-color: lightgrey;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    border-radius:10px;
    margin:10px;
    img{
        width:60%
    }
  `;
    return ( 
        <Project >
            <img src ={props.source} alt ={props.altText} />
            <p>{props.blurb}</p>
            <a href = {props.projectLink}>Click Here To View Code</a>
            <a href = {props.webPage}>Click Here To Vist App</a>
            
        </Project>
     );
}
 
export default Portfolio;

//I want to have src value set to props
//I want alt value set to props
//I want blurb set to props

// I need an array of objects with key value pairs that are set to these values 

