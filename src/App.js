import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Post from './pages/Post';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useState } from 'react';



function App() {

  const [user, setUser] = useState(false);
  const handleSubmit = () => {
    console.log('Submit');
    setUser(true);
  }

  const handlelogout = ()=>{
    setUser(false);
  }
  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} handlelogout={handlelogout}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login"  element={ <Login handleSubmit={handleSubmit}/> } />
          <Route path="/post/:id" element={user ? <Post/> :<Navigate to="/"/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
