import React from 'react';
import styled from 'styled-component';

const Button = styled.button`
  margin: 100px;
  background-image: linear-gradient(
    to right,
    #75dddd 0%,
    #9368b7 51%,
    #7a4ba9 100%
  );
  padding: 15px 35px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 300% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  border: 1px solid white;
  position: relative;
  display: block;
  flex: 1 0 100%;
  &:hover {
    background-position: right center;
    text-decoration: none;
  }
`;
const Buttons = () => {
  return <Button>asdsa</Button>;
};

export default Buttons;
