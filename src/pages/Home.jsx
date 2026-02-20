import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>The Golden Plate</h1>
        <p>Where Every Meal is a Masterpiece</p>
        <Link to="/menu" className="cta-button">Explore Our Menu</Link>
      </div>
    </div>
  );
}

export default Home;