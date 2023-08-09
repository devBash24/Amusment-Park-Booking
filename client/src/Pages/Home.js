import React from "react";
import {useNavigate} from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const loginBtn = () =>{
    navigate('/login');
  }
  return (
    <div className="home-container">
      <h1>
          Welcome to Thrilltopia: Where Adventure Knows No Bounds!
          </h1>
        <button className="book-ticket" onClick={loginBtn}>Book Now</button>
    </div>
  );
};
export default Home;
