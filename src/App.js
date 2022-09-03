import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Login from './pages/Login';

function App() {
  const [user,setUser] = useState({
    logged:false,
    data:null
  })

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home user={user} />} />
      <Route path='/login' element={<Login setUser={setUser} />} />
    </Routes>
</BrowserRouter>

  );
}

export default App;
