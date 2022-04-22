import './banner.scss';

import banner from './hero.jpg';
import mobileBanner from './mobile-hero.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <picture className="banner__picture">
        <source media="(max-width: 599px)" srcSet={mobileBanner} />
        <source media="(min-width: 600px)" srcSet={banner} />
        <img src={banner} className="banner__image" alt="banner" />
      </picture>
    </div>
  );
};

export default Banner;
