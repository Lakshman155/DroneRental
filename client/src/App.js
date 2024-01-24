import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Navbar from './components/headers/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>

    <Routes>
      <Route to='/signup' element={<Signup/>}></Route>
      <Route to='/login' element={<Login/>}></Route>
    </Routes>
    
     
    </div>
  );
}

export default App;
