import React from 'react';
import Styles from './styles.module.scss';
import SocialPNG from '../../../assets/images/contacts.png';
import { Input } from '../../atoms';

const { root, images } = Styles;
const ContactUs = () => {
  return (
    <div className={root}>
      <div>
        <div>
          <h1>
            Contact <span>Us</span>
          </h1>
          <Input name="name" placeholder="Name" />
          <Input name="email" placeholder="Email" />
          <Input name="phone_number" placeholder="Phone Number" />
          <Input name="address" placeholder="Address" />
          <button>SEND</button>
        </div>
        <img src={SocialPNG} alt="social" className={images} />
      </div>
    </div>
  );
};

export default ContactUs;
