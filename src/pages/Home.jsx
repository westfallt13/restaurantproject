import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Our Restaurant</h1>
        <p>Experience delicious food made with love</p>
        <Link to="/menu" className="cta-button">View Menu</Link>
      </div>
    </div>
  );
}

export default Home;