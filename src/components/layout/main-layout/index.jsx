import React, { useRef } from 'react';
import { About, ContactUs, Hero, Pricing } from '../../pages';
import Navbar from '../navbar';
import Styles from '../styles.module.scss';
import { ArrowUPSVG } from '../../../assets/icons';

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
        <ArrowUPSVG />
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
