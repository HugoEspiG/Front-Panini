import { Route, Routes } from 'react-router-dom';
import './App.css';
import Equipos from './pages/Equipos';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:equipo' element={<Equipos/>} />
      </Routes>
    </div>
  );
}

export default App;
