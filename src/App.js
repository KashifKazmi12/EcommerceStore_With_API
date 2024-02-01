import './App.css';
import { Cart } from './Component/Cart';
import { CheckoutPage } from './Pages/CheckoutPage';
import Home from './Pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFoundPage from './OtherPages/NotFoundPage'
import { Contact } from './Pages/Contact';
import { Shop } from './Pages/Shop';
import Wishlist from './Pages/Wishlist';
import { SingleProduct } from './Pages/SingleProduct';

import Test from './Component/Test'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/shop/:id' element={<Shop/>}/>
          <Route path='/product/:id' element={<SingleProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/test' element={<Test/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
