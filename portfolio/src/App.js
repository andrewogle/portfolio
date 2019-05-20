import React from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Skills from './components/Skills'
import Contact from './components/Contact.js';
import PortfolioContainer from './components/PortfolioContainer'
import MobileNav from './components/MobileNav.js';
import MobileHome from './components/MobileHome.js';
import MobilePortContainer from './components/MobilePortContainer.js';
import MobileSkills from './components/MobileSkills.js';
import MobileContact from './components/MobileContact.js';

function App() {
  const AppContainer = styled.div`
    display: flex;
    margin: 0;
    @media(max-width: 500px){
     display:none;
    }
  `
  const MobileApp = styled.div`
   display: none;
   @media(max-width: 500px){
     display: block;
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
    <MobileApp>
      <MobileNav />
      <MobileHome />
      <MobilePortContainer />
      <MobileSkills />
      <MobileContact />
    </MobileApp>
    </div>
  );
}

export default App;
