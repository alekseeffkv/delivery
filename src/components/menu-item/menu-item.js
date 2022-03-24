import './menu-item.scss';

const MenuItem = ({ id, name }) => {
  return (
    <section id={id} className="menu-item">
      <div className="menu-item__title">
        <div className="menu-item__title-inner">
          <h2>{name.toUpperCase()}</h2>
        </div>
      </div>
    </section>
  );
};

export default MenuItem;
