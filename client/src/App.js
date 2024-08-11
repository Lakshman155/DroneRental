import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Navbar from './components/headers/Navbar';
import Homecarousel from './components/Carousel/Homecarousel';
import ProductCard from './components/product/Productcard';
import products from './components/product/Products';
import ShowHome from './components/product/ShowHome';
import AllRentals from './components/admin/AllRentals';
import AllUsers from './components/admin/AllUsers';
import AllProducts from './components/admin/AllProducts';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <div className="App">
  
    <Navbar/>

    <Routes>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/rents' element={<AllRentals/>}></Route>
      <Route path='/users' element={<AllUsers/>}></Route>
      <Route path='/products' element={<AllProducts/>}></Route>
    </Routes>

    <Homecarousel/>
    <ShowHome/>

    <Footer/>


    
     
    </div>
  );
}

export default App;
