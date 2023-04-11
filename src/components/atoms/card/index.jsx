import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles.module.scss';

const { root, _list } = Styles;
const Card = ({ title, price, data }) => {
  return (
    <div className={root}>
      <div>
        <h2>{title}</h2>
        <h1>${price}</h1>
      </div>
      <div className={_list}>
        <ul>
          {data.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <footer>
        <button>Create Account</button>
      </footer>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  data: PropTypes.array,
};

Card.defaultProps = {
  title: 'Card Title',
  price: '99',
  data: [
    'lorem ipsum dolor sit amet',
    'lorem ipsum dolor sit amet',
    'lorem ipsum dolor sit amet',
  ],
};

export default Card;
