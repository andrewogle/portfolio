import React from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Skills from './components/Skills'
import Contact from './components/Contact.js';
import PortfolioContainer from './components/PortfolioContainer'

function App() {
  const AppContainer = styled.div`
    display: flex;
    margin: 0;
    @media(max-width: 500px){
      flex-direction: column;
    }
  `
  return (
    <div className="App">
    <AppContainer>
     <Route path = '/' component = {NavBar} />
     <Route exact path = '/' component = {Home} />
     <Route exact path = '/skills' component = {Skills} />
     <Route exact path = '/contact' component = {Contact} />
     <Route exact path = '/portfolio' component = {PortfolioContainer} />
     </AppContainer>
    </div>
  );
}

export default App;
