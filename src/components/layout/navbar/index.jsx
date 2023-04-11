import React from 'react';
import Styles from '../styles.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const { navbar, button } = Styles;
const navItems = ['ABOUT', 'PRICING', 'CONTACT'];
const Navbar = ({ onClick }) => {
  return (
    <div className={navbar}>
      <div>
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          stroke-width="1.8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#fff"
        >
          <path
            d="M12.502 9.13l2.049.531c.264.069.45.309.441.582C14.826 15.232 12 16 12 16s-2.826-.768-2.992-5.757a.584.584 0 01.441-.582l2.05-.53a2 2 0 011.003 0zM2 8l9.732-4.866a.6.6 0 01.536 0L22 8"
            stroke="#fff"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M20 11v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8"
            stroke="#fff"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <p>HOME</p>
      </div>
      <div>
        {navItems.map((item, index) => {
          return (
            <p key={index} onClick={() => onClick(index)}>
              {item}
            </p>
          );
        })}
        <NavLink to="/auth/login">
          <button className={button}>LOGIN</button>
        </NavLink>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  onClick: PropTypes.func,
};

Navbar.defaultProps = {
  onClick: () => {},
};

export default Navbar;
