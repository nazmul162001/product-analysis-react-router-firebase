import { useNavigate } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import SingleProduct from '../SingleProduct/SingleProduct';
import './ReviewSection.css';
import Reviews from '../Reviews/Reviews';

const ReviewSection = () => {
  const navigate = useNavigate();
  //custom hooks
  const [products] = useProduct();
  const myProducts = products.slice(0, 3);

  return (
    <div className="bg-indigo-700">
      <h2 className="text-5xl text-center text-slate-300 font-mono">
        Customer Reviews ({myProducts.length})
      </h2>
      <div className="reviews grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center mt-28 mb-10 text-center gap-5 px-5">
        {myProducts.map((product) => (
          <SingleProduct key={product._id} product={product} />
        ))}
      </div>
      <div className="text-center pb-10">
        <button onClick={() => navigate("/reviews")} className="see-more-btn text-3xl text-gray-200 px-10 py-1">See All Reviews</button>
      </div>
    </div>
  );
};

export default ReviewSection;
