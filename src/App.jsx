import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartaProvider } from './context';
import './index.css';
import Home from './pages/home'
import Biblioteca from './pages/biblioteca'
import NinjasBiblioteca from './pages/ninjasBiblioteca'
function App() {

  return (
    <>
      <CartaProvider>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/biblioteca' element={<Biblioteca/>}/>
              <Route path='/ninjas' element={<NinjasBiblioteca/>}/>
              <Route path='*' element={<Home/>}/>
            </Routes>
        </BrowserRouter> 
      </CartaProvider>
    </>
  );
}

export default App;
