import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">Restaurant</NavLink>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
              end
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/menu" 
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
            >
              Menu
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/order" 
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
            >
              Order
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink 
              to="/chatbot" 
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
            >
              Chatbot
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;