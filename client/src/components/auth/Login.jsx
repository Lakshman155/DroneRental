import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Dialog, Typography } from '@mui/material';

const Login = ({ open, setOpen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => {
    setOpen(false);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get('http://localhost:8080/users/getuser', { email: email, paswrd: password })
      .then(response => {
        console.log('Login successful:', response.data);
      })
      .catch(error => {
        console.error('There was an error logging in:', error);
      });

    console.log('The details are', email, password);
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose} 
      sx={{ '& .MuiDialog-paper': { width: '400px', maxWidth: 'none' } }}
    >
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full">
          <Typography variant="h4" className="text-center font-bold mb-6">
            Login
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <Typography variant="body2" className="text-gray-500">

              Don't have an account? <button className='text-lg text-blue-500' onClick={handleClose}> signup </button>
              {/* <Link to="/signup" className="text-blue-500 hover:underline" >Sign up</Link> */}

            </Typography>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Login;
