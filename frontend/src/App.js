import './App.css';
import Home from './components/Home';
import Login from './components/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signup from './components/Signup';
import Navbar from './components/Navbar';


function App() {

  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element={<Home></Home>} path="home" />
      <Route element={<Login></Login>} path="login" />
      <Route element={<Signup />} path="signup" />
    </Routes>
  </BrowserRouter>

}

export default App;