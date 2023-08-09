import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <div className="navbar-container user">
      <div className="logo" onClick={() => { navigate('/') }}>
        <span>Logo</span>
      </div>
      {location.pathname === '/register' ? <button className="register-btn" onClick={() => { navigate('/login') }}>Login</button> :
       <button className="register-btn" onClick={() => { navigate('/register') }}>Register</button>}
    </div>
  );
};

export default NavBar;
