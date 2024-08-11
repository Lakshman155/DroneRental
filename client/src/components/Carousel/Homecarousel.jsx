import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from './baner1.avif';
import img2 from './baner2.avif';
import img3 from './baner3.avif';



function Homecarousel() {
    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img  className='h-64' src={img1} onDragStart={handleDragStart} role="presentation" />,
        <img className='h-64'  src={img2} onDragStart={handleDragStart} role="presentation" />,
        <img  className='h-64'  src={img3} onDragStart={handleDragStart} role="presentation" />,
    ];
  return (
    <div className='h-64'>

       <AliceCarousel mouseTracking items={items} />
    </div>
  )
}




export default Homecarousel;
