import React from 'react';
import api from '../api/Api';
import Button from '@mui/material/Button';
// import 'tailwindcss/tailwind.css'

const ProductCard = ({ product}) => {


  const addtorent=async ()=>{


    try{
      await api.post('/rent/addrentals',{product})
      alert('added your rental')

    }
    catch(err){
      console.log('error in adding to rentals');
    }

    


  }
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-48 object-cover" src={product.url} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p className="text-gray-900 font-bold mt-2">${product.price}/day</p>



      </div>

      


      <Button variant='contained'  onClick={addtorent}>rent</Button>
    </div>
  );
};

export default ProductCard;
