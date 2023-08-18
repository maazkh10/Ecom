
import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import { Routes, Route} from 'react-router-dom'
import Singleproduct from './modules/Singleproduct'
import Products from './modules/products';
import CategoryProducts from './modules/CategoriesProducts';
import Cart from './modules/Cart';
function App() {
  return (
    <div>
     <Header />
     <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/product/:id' element={<Singleproduct/>}  />
      <Route path='/products' element={<Products/>}  />
      <Route path='/categories/:name' element={<CategoryProducts/>}  />
      <Route path='cart' element={<Cart/>}  />
     </Routes>
     
   
    </div>
  );
}

export default App;
