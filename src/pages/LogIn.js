import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../App.css'

export default function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const showToastSuccess = (message) => {
        toast.success(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
        });
    };

    const showToastError = (message) => {
        toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8000/login', {username,password,});
          console.log('Login successful:', response.data);

          if (response.data.success) {
            // Redirect to a home page
            navigate('/home');
            showToastSuccess(response.data.message);
          } else {
            console.error('Login failed:', response.data.message);
            showToastError(response.data.message);
          }
        } catch (error) {
          console.error('Login failed:', error.message);
        }
    };

    return (
        <div className="text-center m-5-auto center">
            <div>
            <h1>Sign in to us</h1>
            <br></br>
            <form method='post' action="/">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={handleLogin}>Login</button>
                </p>
            </form>
            <footer>
            <br></br>
                <p>First time? <Link to="/signup">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
            </div>
        </div>
    )
}