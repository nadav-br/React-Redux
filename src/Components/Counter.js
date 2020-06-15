import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from "../state/action/counter.action";
import styled from "styled-components";

function Counter() {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <Box>
            <Btn onClick={()=> dispatch(increment(1))}>+</Btn>
            <Label>Count: {count}</Label>
            <Btn onClick={()=> dispatch(decrement())}>-</Btn>
        </Box>
    )
}

export default Counter

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Btn = styled.button`
  border-radius: 30%;
  outline: false;
  border: solid 2px #4e4e4e;
  width: 40px;
  height: 40px;
  padding-top: 15px;
  font-size: 32px;
  background: #787878;
  color: white;
  cursor: pointer;
  outline: none;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;


  :focus {
    outline: none;
  }
`;

const Label = styled.span`
  font-size: 18px;
`;