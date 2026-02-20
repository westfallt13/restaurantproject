import PropTypes from 'prop-types';

function MenuItem({ name, price, image_url }) {
  return (
    <div className="menu-item">
      <img src={image_url} alt={name} className="menu-item-image" />
      <div className="menu-item-details">
        <h3 className="menu-item-name">{name}</h3>
        <p className="menu-item-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired
};

export default MenuItem;