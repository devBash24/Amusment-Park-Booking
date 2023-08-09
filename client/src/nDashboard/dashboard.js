import React, { useState,useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import "./main.css";
import Sidebar from "./components/sidebar";
//import Side from './components/Side'
import Navbar from "./components/navbar";

function Dashboard() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [username, setUserName] = useState('');
  const toggleMenu = () => {
    setMenu(!menu);
  };
  useEffect(() =>{
    axios.get('http://localhost:5000/api/login',{
      withCredentials: true
    }).then(res=>{
      if(!res.data.status){
        navigate('/login');
      }
      setUserName(res.data.username);
    }).catch(err =>{
      console.log(err);
    });
  })

  const handleLogout =()=>{
    axios.post('http://localhost:5000/api/logout',{
      withCredentials: true
    }).then(result=>{
      if(result.data.success){
        navigate('/');
      }else{
        navigate('/error')
      }
      
    }).catch(err =>{
      console.log(err);
    });
  }

  return (
    <div className="dash-container">
            <Sidebar Logout={handleLogout} menu={menu} username={username}/>
        <div className="main-content">
                <Navbar Logout={handleLogout} Toggle={toggleMenu} menu={menu} username={username}/>
                <Outlet />
        </div>
    </div>
  );
}
export default Dashboard;
