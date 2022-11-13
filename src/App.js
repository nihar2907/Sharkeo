import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './Components/Aboutus';
import Details from './Components/Details';
import Explore from './Components/Explore';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Registration from './Components/Registration';

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}  />
        <Route exact path='/explore' element={<Explore/>}  />
        <Route exact path='/login' element={<Login/>}  />
        <Route exact path='/about' element={<Aboutus/>}  />
        <Route exact path='/register' element={<Registration />} />
        <Route exact path='/details' element={<Details />} />
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
