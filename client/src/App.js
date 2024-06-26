import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Navbar from './components/headers/Navbar';
import Homecarousel from './components/Carousel/Homecarousel';

function App() {
  return (
    <div className="App">
  
    <Navbar/>

    <Routes>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>

    <Homecarousel/>

      
    
     
    </div>
  );
}

export default App;
