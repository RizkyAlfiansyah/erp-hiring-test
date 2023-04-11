import React, { useRef } from 'react';
import { About, ContactUs, Hero, Pricing } from '../../pages';
import Navbar from '../navbar';
import Styles from '../styles.module.scss';

const { root, arrow_container } = Styles;
const MainLayout = () => {
  const ref = useRef(null);
  const about = useRef(null);
  const pricing = useRef(null);
  const contacs = useRef(null);

  const onClick = (index) => {
    switch (index) {
      case 0:
        about.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 1:
        pricing.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 2:
        contacs.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  };

  return (
    <div className={root}>
      <div
        className={arrow_container}
        onClick={() => {
          ref.current?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <svg
          width="48px"
          height="48px"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#fff"
        >
          <path
            d="M6 15l6-6 6 6"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
      <Navbar onClick={onClick} />
      <section ref={ref}>
        <Hero />
      </section>
      <section ref={about}>
        <About />
      </section>
      <section ref={pricing}>
        <Pricing />
      </section>
      <section ref={contacs}>
        <ContactUs />
      </section>
    </div>
  );
};

export default MainLayout;
