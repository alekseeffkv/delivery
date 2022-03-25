import './menu-item.scss';
import ProductCard from '../product-card';

const MenuItem = ({ category }) => {
  return (
    <section id={category.id} className="menu-item">
      <div className="menu-item__title">
        <div className="menu-item__title-inner">
          <h2>{category.name.toUpperCase()}</h2>
        </div>
      </div>
      <div className="menu-item__body">
        {category.dishes.map((id) => (
          <ProductCard key={id} id={id} />
        ))}
      </div>
    </section>
  );
};

export default MenuItem;
