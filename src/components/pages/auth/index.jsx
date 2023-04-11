import React from 'react';
import Styles from './styles.module.scss';
import LoginPNG from '../../../assets/images/login.png';
import { Input } from '../../atoms';
import { NavLink } from 'react-router-dom';

const { root, images } = Styles;
const Login = () => {
  return (
    <div className={root}>
      <div>
        <div>
          <h1>
            Login to Your <span>Account</span>
          </h1>
          <Input type="email" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" />
          <NavLink to="/">
            <button>LOGIN</button>
          </NavLink>
        </div>
        <img src={LoginPNG} alt="social" className={images} />
      </div>
    </div>
  );
};

export default Login;
