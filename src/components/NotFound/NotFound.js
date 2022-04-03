
import React from 'react';
import img from '../../images/404.png'

const NotFound = () => {
  return (
    <div className='w-full h-full'>
      <img className='w-full h-screen' src={img} alt="" />
    </div>
  );
};

export default NotFound;