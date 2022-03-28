import './banner.scss';

import banner from './hero.png';
import mobileBanner from './mobile-hero.png';

const Banner = () => {
  return (
    <div className="banner">
      <picture className="banner__picture">
        <source media="(max-width: 480px)" srcSet={mobileBanner} />
        <source media="(min-width: 481px)" srcSet={banner} />
        <img src={banner} className="banner__image" alt="banner" />
      </picture>
    </div>
  );
};

export default Banner;
