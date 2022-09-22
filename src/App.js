import { Route, Routes } from 'react-router-dom';
import './App.css';
import Equipos from './pages/Equipos';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:equipo' element={<Equipos/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
