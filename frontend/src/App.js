import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import ShopCategory from './pages/ShopCategory';
import bird from './components/assets/birdbanner.png';
import dog from './components/assets/dogbanner.png';
import cat from './components/assets/catbanner.png'
import Product from './pages/Product';

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/dog' element ={<ShopCategory  banner={dog} category="dog"/>}/>
        <Route path='/cat' element ={<ShopCategory banner={cat} category="cat"/>}/>
        <Route path='/bird' element ={<ShopCategory banner={bird} category="bird"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
