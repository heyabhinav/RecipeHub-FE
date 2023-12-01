import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
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

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://recipehub-server.vercel.app/signup', {username,email,password,});
          console.log('SignUp successful:', response.data);

          if (response.data.success) {
            // Redirect to a home page
            navigate('/login');
            showToastSuccess(response.data.message);
          } else {
            console.error('SignUp failed:', response.data.message);
            showToastError(response.data.message);
          }
        } catch (error) {
          console.error('SignUp failed:', error.message);
        }
    };

    return (
        <div className="text-center m-5-auto center">
            <div>
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <br></br>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={handleSignup} >Sign Up</button>
                </p>
            </form>
            <footer>
            <br></br>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
            </div>
        </div>
    )

}