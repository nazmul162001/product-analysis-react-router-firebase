import React from 'react';
import './SingleProduct.css';

const SingleProduct = (props) => {
  const { name, picture, ratings, review } = props.product;
  return (
    <div className='customer-review flex justify-center items-center'>
      <div className="review-content rounded-2xl p-5 h-[400px]">
        <img className="w-28 h-28 rounded-3xl mx-auto" src={picture} alt="" />
        <h2 className='py-2 font-mono text-slate-300 text-xl'>Name: {name} </h2>
        <p className='py-5 text-gray-400'>{review.slice(0,200)}</p>
        <p><span className='font-medium text-orange-300'>Ratings: {ratings} stars</span></p>
      </div>
    </div>
  );
};

export default SingleProduct;
