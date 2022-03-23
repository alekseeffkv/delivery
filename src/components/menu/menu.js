import MenuItem from '../menu-item';

export default function Menu({ categories }) {
  return (
    <main>
      {categories.map((category) => (
        <MenuItem key={category.id} id={category.id} name={category.name} />
      ))}
    </main>
  );
}
