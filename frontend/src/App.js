import { Route, Router, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import HotelList from "./Pages/HotelList";
import SingleHotel from "./Pages/SingleHotel";

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/hotels" element={<HotelList />} />
         <Route path="/hotels/:id" element={<SingleHotel />} />
       </Routes>
    </div>
  );
}

export default App;
