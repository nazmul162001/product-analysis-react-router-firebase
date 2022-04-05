import React from 'react';
import img from '../../images/gaiming-headset.png';
import ReviewSection from '../ReviewSection/ReviewSection';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <section className="hero grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-indigo-700">
        <div className="product-content pl-16 order-2 md:order-1 mb-10 md:mb-0">
          <h1 className="hero-title1 font-bold text-4xl md:text-7xl text-emerald-400 font-mono">
            LIKE YOU
          </h1>
          <h2 className="hero-title2 font-bold text-4xl md:text-7xl font-mono">
            WE LOVE MUSIC
          </h2>
          <p className="text-gray-300 font-serif">
            And we believe a Headphone is more than just an instrument for
            sound. It’s the key to a mind-blowing moment of emotion, bringing
            you closer to your music, and yourself. We’ve curated the world’s
            finest headphones & earphones to help you discover the riffs,
            percussions, baselines and solos that were always there but never
            heard.
          </p>
          <button
            type="button"
            class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 mt-3 px-8 py-2 rounded-md"
          >
            Buy Now
          </button>
        </div>
        <div className="product-img flex justify-center order-1 md:order-2 mb-10 md:mb-0">
          <img className="h-screen" src={img} alt="" />
        </div>
      </section>
      <ReviewSection />
    </>
  );
};

export default HomePage;
