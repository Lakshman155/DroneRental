import React, { useState } from 'react';
import api from '../api/Api';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
// import 'tailwindcss/tailwind.css'

const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [rentDate, setRentDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddToRent = async () => {
    try {
      // console.log(productid,rentDate,returnDate)
      await api.post('/rent/addrentals', {
        
        rentDate,
        returnDate,
        product
        

      });
      alert('Added your rental');
      handleClose(); // Close the modal after successful submission
    } catch (err) {
      handleClose(); 
      alert("please login");
      // console.log('Error in adding to rentals');
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.brand} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.brand}- {product.capacity} liters</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p className="text-gray-900 font-bold mt-2">${product.price}/day</p>
      </div>
      <div className='p-2'>
      <Button variant='contained' onClick={handleClickOpen}>
        Rent
      </Button>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Rent Product</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="from"
            type="date"
            fullWidth
            value={rentDate}
            onChange={(e) => setRentDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            label="Return on"
            type="date"
            fullWidth
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddToRent} color="primary">
            Confirm Rent
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductCard;
