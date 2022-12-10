import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Home />} path='*'/>
          <Route element={<Register />} path='/register'/>
          <Route element={<Login />} path='/login'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
