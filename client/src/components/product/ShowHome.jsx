// import axios from 'axios'
import api from '../api/Api'
import React from 'react'

import ProductCard from './Productcard'

import { useState,useEffect } from 'react'

function ShowHome() {


    const [products,setProducts]=useState([])

useEffect(()=>{



     const find=async ()=>{
        try{

            const pds=await api.get('products/getProducts');

            
          console.log(pds.data);

            setProducts(pds.data);
        }
        catch (err){

            console.log(err);


        }

        
    }
    find();

},
    []

)
   
  return (
    <div>
    
    <div className='grid grid-cols-4 gap-4 pl-3 pr-3'>
{

  
  (products.length>0)?
  
  products.map(item=><ProductCard product={item}/>
  )



    
:<div>
</div>
}  
</div>






      
    </div>
  )
}

export default ShowHome
