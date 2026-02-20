import { useState, useEffect } from 'react';
import { fetchMenuItems } from '../services/MenuService';
import MenuItem from '../components/MenuItem';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        console.log('Starting to fetch menu items...');
        setLoading(true);
        const items = await fetchMenuItems();
        console.log('Received items:', items);
        setMenuItems(items);
      } catch (err) {
        console.error('Error in loadMenuItems:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMenuItems();
  }, []);

  // Filter items by category
  const breakfastItems = menuItems.filter(item => item.category?.toLowerCase() === 'breakfast');
  const lunchItems = menuItems.filter(item => item.category?.toLowerCase() === 'lunch');
  const dinnerItems = menuItems.filter(item => item.category?.toLowerCase() === 'dinner');
  const drinkItems = menuItems.filter(item => item.category?.toLowerCase() === 'drinks');

  console.log('Menu items:', menuItems.length);
  console.log('Breakfast:', breakfastItems.length, 'Lunch:', lunchItems.length, 'Dinner:', dinnerItems.length, 'Drinks:', drinkItems.length);

  if (loading) {
    return <div className="menu-loading">Loading menu...</div>;
  }

  if (error) {
    return <div className="menu-error">Error: {error}</div>;
  }

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>

      <section className="menu-section">
        <h2>Breakfast</h2>
        <div className="menu-grid">
          {breakfastItems.map(item => (
            <MenuItem 
              key={item.id}
              name={item.name}
              price={item.price}
              image_url={item.image_url}
            />
          ))}
        </div>
      </section>

      <section className="menu-section">
        <h2>Lunch</h2>
        <div className="menu-grid">
          {lunchItems.map(item => (
            <MenuItem 
              key={item.id}
              name={item.name}
              price={item.price}
              image_url={item.image_url}
            />
          ))}
        </div>
      </section>

      <section className="menu-section">
        <h2>Dinner</h2>
        <div className="menu-grid">
          {dinnerItems.map(item => (
            <MenuItem 
              key={item.id}
              name={item.name}
              price={item.price}
              image_url={item.image_url}
            />
          ))}
        </div>
      </section>

      <section className="menu-section">
        <h2>Beverages & Drinks</h2>
        <div className="menu-grid">
          {drinkItems.map(item => (
            <MenuItem 
              key={item.id}
              name={item.name}
              price={item.price}
              image_url={item.image_url}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;