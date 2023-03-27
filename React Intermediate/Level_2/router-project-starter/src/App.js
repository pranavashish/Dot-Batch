import { Route, Routes, NavLink, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Labs from "./components/Labs";
import Support from "./components/Support";
import NotFound from "./components/NotFound";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader></MainHeader>}>
          {/* default route */}
          <Route index element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/support" element={<Support></Support>}></Route>
          <Route path="/labs" element={<Labs></Labs>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
