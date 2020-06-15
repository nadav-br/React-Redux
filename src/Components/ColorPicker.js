import React from 'react'
import styled from "styled-components";
// import { darken } from "polished";
import { useDispatch } from "react-redux";
import { changeColor, RED, GREEN, BLUE } from "../state/action/color.action";
function ColorPicker() {

    const dispatch = useDispatch();

  return (
    <Box>
      <Btn bg="red" onClick={() => dispatch(changeColor(RED))}>
        Red
      </Btn>
      <Btn bg="green" onClick={() => dispatch(changeColor(GREEN))}>
        Green
      </Btn>
      <Btn bg="blue" onClick={() => dispatch(changeColor(BLUE))}>
        Blue
      </Btn>
    </Box>
  );
}

export default ColorPicker

const Box = styled.div`
  display: flex;
  align-items: center;
`;
const Btn = styled.button`
  border-radius: 30px;
  outline: false;
  width: 80px;
  height: 40px;
  border: solid 2px #4e4e4e;
  font-size: 18px;
  background: ${({ bg }) => bg || "#f5ad42"};
  color: white;
  cursor: pointer;
  outline: none;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;  
  
  :focus {
    outline: none;
  }
`;
