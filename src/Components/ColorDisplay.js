import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

const ColorDisplay = () => {
  const color = useSelector(state => state.color);

  return (
    <Box>
      <Label bg={color}>You choose: {color} </Label>
    </Box>
  );
};

export default ColorDisplay;

const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem;
`;

const Label = styled.span`
  background: ${({ bg }) => bg || "none"};
  font-size: 22px;
  line-height: 1;
  padding: 1rem 1.5rem;
  border-radius: 30px;
  color: white;
  border: solid 2px #4e4e4e;
`;