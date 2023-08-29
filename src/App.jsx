import './App.css';
import './index.css';
import { Routes, Route, Link } from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';
import Home from './components/Home';

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/login" >Login</Link>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
        </div>
        <div id="main-section">
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App