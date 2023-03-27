import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="Signup" element={<Signup></Signup>}></Route>
          <Route path="Dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
