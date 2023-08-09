import React,{useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import './style.css';
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/userFooter";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    
    const  handleSubmit = async (event) => {
        event.preventDefault();
        axios.defaults.withCredentials = true; 
        axios.post('http://localhost:5000/api/login',[email, password])
        .then(res =>{
          if(res.data.success){
            navigate('/dashboard');
          }else{
            setMessage(res.data.message);
          }
        })
        .catch(err => {
          console.log(err.message);
        })
      }
    return (

        <div className='log-reg-container'>
            <div className='nav'>
            <NavBar/>
            </div>
        <div className="login-page">
            <h1>Login</h1>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />

                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register here</Link>.</p>
        </div>
        <Footer/>
        </div>


    );
}

export default Login;