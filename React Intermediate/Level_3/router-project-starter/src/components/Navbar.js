import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
// import { Toaster } from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className="flex justify-evenly">
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="flex gap-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Login -SignUp Logout Dashboard */}

      <div className="flex ml-5 mr-3 gap-3">
        {!isLoggedIn && (
          <Link to="/Login">
            <button>Login</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/Signup">
            <button>Signup</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                // toast.success("Logged Out");
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/Dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
