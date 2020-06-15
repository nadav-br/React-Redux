import React from 'react';
import Counter from "./Components/Counter";
import ColorPicker from './Components/ColorPicker';
import ColorDisplay from './Components/ColorDisplay';
import Header from './Components/Header';
import Person from './Components/Person'
import styled from "styled-components";

function App() {
  return (
    <Box className="App">
     <Header>Redux with Hooks + Async Ajax</Header>     
     <ColorPicker />
     <ColorDisplay />
     <Counter />
     <Person />
    </Box>
  );
}

export default App;

const Box = styled.div`
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;  
  align-items: center;
  padding-top: 7rem;
`;