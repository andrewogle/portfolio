import React from 'react';
import {Route} from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';


function App() {
  const AppContainer = styled.div`
    display: flex;
    margin: 0;
  `
  return (
    <div className="App">
    <AppContainer>
     <Route path = '/' component = {NavBar} />
     <Route exact path = '/' component = {Home} />
     </AppContainer>
    </div>
  );
}

export default App;
