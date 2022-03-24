import MenuItem from '../menu-item';

const Menu = ({ categories }) => {
  return (
    <main>
      {categories.map((category) => (
        <MenuItem key={category.id} id={category.id} name={category.name} />
      ))}
    </main>
  );
};

export default Menu;
