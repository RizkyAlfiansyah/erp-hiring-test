import React from 'react';
import Styles from './styles.module.scss';
import PropTypes from 'prop-types';

const { root, input } = Styles;
const Input = (props) => {
  const { name, ...rest } = props;

  return (
    <section className={root}>
      <label htmlFor={name}>
        <input className={input} {...rest} />
      </label>
    </section>
  );
};

Input.propTypes = {
  name: PropTypes.string,
};

Input.defaultProps = {
  name: 'input',
};

export default Input;
