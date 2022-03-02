import { connect } from 'react-redux';
import MenuItem from '../menu-item';

function Menu({ categories }) {
  return (
    <main>
      {categories.map((category) => (
        <MenuItem key={category.id} id={category.id} name={category.name} />
      ))}
    </main>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(Menu);
