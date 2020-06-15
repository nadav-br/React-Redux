import React from 'react'
import styled from "styled-components";

function Header({ children }) {
    return (
        <Box>
            <Title>{children}</Title>            
        </Box>
    )
}

export default Header

const Box = styled.div`
  background: slategray;
  width: 100%;
  height: 70px;
  padding: 20px;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  font-family: sans-serif;
  color: papayawhip;
  cursor: pointer;
  user-select: none;
`;