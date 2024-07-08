import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOutUserStart, deleteUserFailure, deleteUserSuccess } from "../../redux/users/userSlice";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  // Function to toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle sign out
  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("http://localhost:8080/api/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure("Error signing out"));
    }
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <p>
            Carbon
            <span className="hub" style={{ color: "#4CAF4F" }}>
              Hub
            </span>
          </p>
        </div>
        <div className={`navbar-options ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/service" onClick={() => setIsMenuOpen(false)}>
            Service
          </Link>
          <Link to="/Feature" onClick={() => setIsMenuOpen(false)}>
            Features
          </Link>
          <Link to="/FAQ" onClick={() => setIsMenuOpen(false)}>
            FAQ
          </Link>
          <Link to="/ContactUs" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
        <div className="loginAndSignUp">
          {currentUser == null ? (
            <>
              <button className="login" onClick={() => navigate("/Login")}>
                Login
              </button>
              <button className="signup" onClick={() => navigate("/SignUp")}>
                Sign Up
              </button>
            </>
          ) : (
            <>
              <button className="login" onClick={() => navigate("/Profile")}>
                Profile
              </button>
              <button className="signup" onClick={handleSignOut}>
                Sign Out
              </button>
            </>
          )}
        </div>
        <a href="#" className="nav-toggle" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
