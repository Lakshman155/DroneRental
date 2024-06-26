import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);
  const [data,setData]=useState({
    fname:'',
    lname:'',
    phn:null,
    email:'',
    pswd:'',
    cnfpswd:''

  })

  const handleChange=(e)=>{
    setData(...data,[e.target])

    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="flex justify-center items-center ">
            <div className="bg-slate-200 p-8 rounded-lg shadow-md max-w-3xl w-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fname" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input id="fname" name="fname" type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                  </div>
                  <div>
                    <label htmlFor="lname" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input id="lname" name="lname" type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input id="phone" name="phone" type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input id="email" name="email" type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                  </div>
                  <div>
                    <label htmlFor="pswd" className="block text-sm font-medium text-gray-700">Password</label>
                    <input id="pswd" name="pswd" type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                  </div>
                  <div>
                    <label htmlFor="confpswd" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input id="confpswd" name="confpswd" type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
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
