import React from 'react';
import { WaveSVG } from '../../../assets/icons';
import Navbar from '../../layout/navbar';
import Styles from './styles.module.scss';
import BlobPNG from '../../../assets/images/blob.png';
import WavePNG from '../../../assets/images/wave.png';
import Illustration from '../../../assets/images/bussiness-illustration.png';

const { root, _icons, _container, _icons_footer, content, images } = Styles;
const Hero = ({ ...rest }) => {
  return (
    <div className={root} {...rest}>
      <img src={BlobPNG} alt="blob" width={48} height={48} className={_icons} />
      <div className={content}>
        <div>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div></div>
        </div>
        <div>
          <div></div>
          <p>"Excepteur sint occaecat cupidatat non proident"</p>
          <img src={Illustration} alt="ilustrations" className={images} />
        </div>
      </div>
      <img src={WavePNG} alt="wave" className={_icons_footer} />
    </div>
  );
};

export default Hero;
