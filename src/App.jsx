import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import OrderPage from './pages/OrderPage';
import ChatbotPage from './pages/ChatbotPage';
import UtilityToolbox from './components/UtilityToolbox';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
          </Routes>
        </main>
        <UtilityToolbox />
      </div>
    </Router>
  );
}

export default App;