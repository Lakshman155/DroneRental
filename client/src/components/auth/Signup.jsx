import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

function Signup() {
  const [open2, setOpen2] = useState(true);
  const handleClose = () => setOpen2(false);

  const [data, setData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    password: '',
    cnfpswd: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!data.fname) {
      tempErrors['fname'] = 'First Name is required';

      isValid = false;
    }
    if (!data.lname) {
      tempErrors['lname'] = 'Last Name is required';
      isValid = false;
    }
    if (!data.phone) {
      tempErrors['phone'] = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(data.phone)) {
      tempErrors['phone'] = 'Phone number must be 10 digits';
      isValid = false;
    }
    if (!data.email) {
      tempErrors['email'] = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      tempErrors['email'] = 'Email address is invalid';
      isValid = false;
    }
    if (!data.password) {
      // console.log("password is required")
      tempErrors['pswd'] = 'Password is required';
      isValid = false;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(data.password)) {
      console.log("password is not crct",data.password)
      tempErrors['password'] = 'Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character';
      isValid = false;
    }
    if (!data.cnfpswd) {
      tempErrors['cnfpswd'] = 'Confirm Password is required';
      isValid = false;
    } else if (data.password !== data.cnfpswd) {
      console.log("password is not matched d")
      tempErrors['cnfpswd'] = 'Passwords do not match';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(data);
      try {
        await axios.post('http://localhost:8080/users/adduser', data);
        alert("added user");
        console.log('User added successfully');
        setOpen2(false);
      } catch (error) {
        console.log(data);
        console.log(error);
        alert("error occured");
      }
    }
    else{
      alert("validation failed");
      console.log(errors)
    }
  };

  return (
    <div>
      <Modal open={open2} onClose={handleClose}>
        <Box sx={style}>
          <div className="flex justify-center items-center">
            <div className="bg-slate-200 p-8 rounded-lg shadow-md max-w-3xl w-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fname" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      id="fname"
                      name="fname"
                      type="text"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      onChange={handleChange}
                    />
                    {errors.fname && <span className="text-red-500 text-sm">{errors.fname}</span>}
                  </div>
                  <div>
                    <label htmlFor="lname" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      id="lname"
                      name="lname"
                      type="text"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      onChange={handleChange}
                    />
                    {errors.lname && <span className="text-red-500 text-sm">{errors.lname}</span>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      onChange={handleChange}
                    />
                    {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      onChange={handleChange}
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      onChange={handleChange}
                    />
                    {errors.pswd && <span className="text-red-500 text-sm">{errors.password}</span>}
                  </div>
                  <div>
                    <label htmlFor="cnfpswd" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                      id="cnfpswd"
                      name="cnfpswd"
                      type="password"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      onChange={handleChange}
                    />
                    {errors.cnfpswd && <span className="text-red-500 text-sm">{errors.cnfpswd}</span>}
                  </div>
                </div>
                <div>
                  <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Signup;
