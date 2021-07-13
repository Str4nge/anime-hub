/* eslint-disable arrow-body-style */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { StyledLink } from './Styled';

const Links = [
  { to: '/', text: 'Home' },
  { to: '/Starred', text: 'Starred' },
];

const Navs = () => {
  const location = useLocation();
  // console.log(location);

  return (
    <div>
      <ul className="nav-list">
        {Links.map(link => {
          return (
            <li key={link.to}>
              <StyledLink
                className={location.pathname === link.to ? 'active' : ''}
                to={link.to}
              >
                {link.text}
              </StyledLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navs;
