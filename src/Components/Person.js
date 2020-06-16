import React from 'react';
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchRandomPerson } from "../state/action/person.action";

function Person() {
     
    const { data, isLoading, errorMSg } = useSelector(state => state.person);
    const dispatch = useDispatch();
    const getRandomPerson = () => dispatch(fetchRandomPerson());

  if (isLoading) return <LoadTxt>Loading data...</LoadTxt>;
  if (errorMSg) return <h1>{errorMSg}</h1>;

  if (Object.keys(data).length) {
    const {
      picture: { large: avatar },
      name: { first, last }
    } = data;
    return (
      <>
        <Box>
          <Img src={avatar} alt="avatar" />
          <Label>
            {first} {last}
          </Label>
        </Box>
        <Btn size="lg" onClick={getRandomPerson}>
          Fetch Another
        </Btn>
      </>
    );
  }
  return (
    <Btn size="lg" onClick={getRandomPerson}>
      Fetch Person
    </Btn>
  );
}

export default Person

const Btn = styled.button`
  /* font-size: 2rem; */
  margin-top: 3rem;
  border-radius: 4%;
  outline: false;
  border: solid 2px #4e4e4e;
  width: 140px;
  height: 40px;
  padding-top: 15px;
  
  background: #1885f2;
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
const LoadTxt = styled.h2`
  font-size: 2rem;
  margin-top: 17rem;
  color: #737373;
`;
const Label = styled.h2`
  font-size: 2rem;
  margin-top: 1rem;
`;
const Img = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  margin-top: 1rem;
`;
const Box = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;