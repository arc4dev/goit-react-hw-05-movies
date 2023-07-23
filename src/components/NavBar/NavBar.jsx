import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './NavBar.module.css';
import { styled } from 'styled-components';

const StyledLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  &.active {
    color: red;
  }
`;

export const NavBar = () => {
  return (
    <nav className={css.nav}>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </nav>
  );
};
