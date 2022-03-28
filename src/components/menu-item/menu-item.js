import './menu-item.scss';

import Slider from 'react-slick';

import ProductCard from '../product-card';

const MenuItem = ({ category }) => {
  const sliderSettings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: 'menu-item__slider',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id={category.id} className="menu-item">
      <div className="menu-item__title">
        <div className="menu-item__title-inner">
          <h2>{category.name.toUpperCase()}</h2>
        </div>
      </div>
      <Slider {...sliderSettings}>
        {category.dishes.map((id) => (
          <ProductCard key={id} id={id} />
        ))}
      </Slider>
    </section>
  );
};

export default MenuItem;
