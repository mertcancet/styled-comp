import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const NavigationBar = styled.div`
  height: 50px;
  background-color: grey;
  padding: 5px;

  > ul {
    > li {
      display: inline;
      border: 3px solid black;
      border-radius: 5px;
      padding: 10px;
      margin: 5px;
      &:hover {
        background-color: black;
      }
      > a {
        text-decoration: none;
        color: white;
      }
    }
  }
`;

function Header() {
  return (
    <NavigationBar>
      <ul>
        <li>
          <Link to='/bootstrap-buttons'>Home</Link>
        </li>
        <li>
          <Link to='/bootstrap-buttons'>Bootstrap Buttons</Link>
        </li>
      </ul>
    </NavigationBar>
  );
}

export default Header;
