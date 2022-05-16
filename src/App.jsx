import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/home'
import Biblioteca from './pages/biblioteca'
import NinjasBiblioteca from './pages/ninjasBiblioteca'
import HeaderUser from './componentes/header'
import FooterUser from './componentes/footer'
function App() {

  return (
    <>
        <HeaderUser/>
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/biblioteca' element={<Biblioteca/>}/>
                <Route path='/ninjas' element={<NinjasBiblioteca/>}/>
                <Route path='*' element={<Home/>}/>
              </Routes>
          </BrowserRouter> 
        <FooterUser/>
    </>
  );
}

export default App;
