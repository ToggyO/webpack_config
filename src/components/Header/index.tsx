import React from 'react';

import { Link } from 'react-router-dom';
import { userLogout } from '@services/auth';
import s from './style.module.sass';


export const Header: React.FC = () => (
  <div className="navbar-fixed">
    <nav>
      <div className={`${s.nav} nav-wrapper`}>
        <a href="/" className="brand-logo">React+Redux+Typescript</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/todo">Todo</Link></li>
          <li>
            <a
              href="/"
              type="button"
              // className="btn"
              onClick={userLogout}
            >
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);
