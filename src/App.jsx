import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import NinjasBiblioteca from './pages/ninjasBiblioteca';
import Adventure from './pages/adventure';
import SignIn from './pages/signIn';
import City from './pages/city';
import GuardedRoute from './componentes/guard/guardRoute';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
function App() {
  const state = useSelector(state => state.cardReducer.AcountOnline)
  const login = state
  return (
    <>
          <BrowserRouter>
              <Routes>
                <Route path='/sign-in' element={<SignIn/>}/>
                <Route path='/' element={<GuardedRoute component={Home} login={login}/>}/>
                <Route path='/Ninjas' element={<GuardedRoute component={NinjasBiblioteca} login={login}/>}/>
                <Route path='/Adventure' element={<GuardedRoute component={Adventure} login={login}/>}/>
                <Route path='/City' element={<GuardedRoute component={City} login={login}/>}/>
                <Route path='*' element={<GuardedRoute component={Home} login={login}/>}/>
              </Routes>
          </BrowserRouter> 
    </>
  );
}

export default App;
