import './banner.scss';
import banner from './hero.png';
import mobileBanner from './mobile-hero.png';

const Banner = () => {
  return (
    <div className="banner">
      <picture>
        <source media="(max-width: 480px)" srcSet={mobileBanner} />
        <source media="(min-width: 481px)" srcSet={banner} />
        <img src={banner} alt="banner" className="banner__image" />
      </picture>
    </div>
  );
};

export default Banner;
