import React from 'react';
import Styles from './styles.module.scss';
import { Card } from '../../atoms';

const pricingData = [
  {
    title: 'Basic',
    price: '99',
    data: ['Record incoming goods', 'Check out goods', 'Record profits'],
    disabled: false,
  },
  {
    title: 'Business',
    price: '199',
    data: [
      'Record incoming and outgoing goods',
      'Record Profits',
      'Can analyze sales results with CHART',
      'Support 7x24 Hours',
    ],
    disabled: true,
  },
  {
    title: 'Enterpreneur',
    price: '299',
    data: [
      'Record incoming and outgoing goods',
      'Record Profits',
      'Can analyze sales results with CHART',
      'Support 7x24 Hours',
      'Export data to Excel',
      'AI Earning Prediction',
    ],
    disabled: true,
  },
];
const { root, _card_container } = Styles;
const Pricing = () => {
  return (
    <div className={root}>
      <div>
        <h1>Choose Your Tier</h1>
        <p>loraem ipsum dolor sit amet, consectetur adipiscing elit. sed do</p>
      </div>
      <div className={_card_container}>
        {pricingData.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#99d6ef"
          fillOpacity="1"
          d="M0,256L40,245.3C80,235,160,213,240,208C320,203,400,213,480,192C560,171,640,117,720,122.7C800,128,880,192,960,202.7C1040,213,1120,171,1200,149.3C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Pricing;
