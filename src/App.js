import { Route, Routes } from 'react-router-dom';
import './App.css';
import Equipos from './pages/Equipos';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ChatPage from './pages/ChatPage';
import AddFriends from './pages/AddFriends';
import AbrirSobres from './pages/AbrirSobres';
import IntercambiarMonas from './pages/IntercambiarMonas'; 
import React from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/:equipo' element={<Equipos/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/addFriends' element={<AddFriends/>} />
        <Route path='/open' element={<AbrirSobres/>} />
        <Route path='/change' element={<IntercambiarMonas/>} />
        <Route path='/chat/:amigos' element={<ChatPage/>} />
      </Routes>
    </div>
  );
}

export default App;
