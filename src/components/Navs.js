/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';

const Links = [
  { to: '/', text: 'Home' },
  { to: '/Starred', text: 'Starred' },
];

const Navs = () => {
  return (
    <div>
      <ul>
        {Links.map(link => {
          return (
            <li key={link.to}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navs;
