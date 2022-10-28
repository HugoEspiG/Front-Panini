import { Route, Routes } from 'react-router-dom';
import './App.css';
import Equipos from './pages/Equipos';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/:equipo' element={<Equipos/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/chat/:amigos' element={<ChatPage/>} />
      </Routes>
    </div>
  );
}

export default App;
