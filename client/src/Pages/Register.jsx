import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/userFooter";
import axios from "axios";


const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        axios.defaults.withCredentials = true; 
        event.preventDefault();
        axios.post('http://localhost:5000/api/register',[name, email, password])
        .then(res =>{
          if(res.data.success){
            console.log(res.data);
            navigate('/login?data'+res.data.message);
          }else{
            //setMessage(res.data.message);
            console.log(res.data.message);
          }
        })
        .catch(err => {
          console.log(err.message);
        })
        // Handle sign-up logic
        console.log('Sign-up submitted:', { name, email, password, confirmPassword });
        // Clear form fields
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <div className='log-reg-container'>
            <div className='nav'>
                <NavBar />
            </div>
            <div className="signup-page">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        required
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleInputChange}
                        required
                    />

                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <Link to="/login">Login here</Link>.</p>
            </div>


            <Footer />
        </div>
    );
}

export default Register;