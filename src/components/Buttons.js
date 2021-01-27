import React from 'react';
import styled from 'styled-components';

const replaceProps = (string) => {
  const modifiedString = string
    .replace('primary', '#007bff')
    .replace('secondary', '#6c757d')
    .replace('success', '#218838');
  return modifiedString;
};

const Button = styled.button`
  margin: 5px;
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  color: #fff;

  width: ${(props) => props.block && '98%'};
  background-color: ${(props) => props.variant};
  border-color: ${(props) => props.variant};

  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const MyButtons = (props) => {
  const modProps = replaceProps(props.variant);
  console.log({ modProps });
  console.log(props.block);
  return (
    <Button variant={modProps} block={props.block}>
      {props.variant} {props.children}
    </Button>
  );
};

MyButtons.defaultProps = {
  variant: 'primary',
};

export default MyButtons;
