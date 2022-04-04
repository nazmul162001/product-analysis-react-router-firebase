import React, { useEffect, useState } from 'react';

const ReviewSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])
  return (
    <div className='bg-indigo-700'>
      <h2 className='text-5xl text-center text-slate-300 font-mono'>Customer Reviews ({products.length})</h2>
      <div className="reviews">
        {
          products.map(product => console.log(product.name))
        }
      </div>
    </div>
  );
};

export default ReviewSection;