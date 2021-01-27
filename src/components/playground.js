import React from 'react';
import styled from 'styled-components';

// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || 'palevioletred'};
  background: papayawhip;
  border: 1px solid;
  border-radius: 3px;
`;

// Render a styled text input with the standard input color, and one with a custom input color
const Playground = () => {
  return (
    <div>
      <Input defaultValue='@probablyup' type='text' />
      <Input defaultValue='@geelen' type='text' inputColor='rebeccapurple' />
    </div>
  );
};

export default Playground;
