import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
function Homecarousel() {
    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
        <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
    ];
  return (
    <div>
       <AliceCarousel mouseTracking items={items} />
    </div>
  )
}




export default Homecarousel;
