import useProduct from '../../hooks/useProduct';
import SingleProduct from '../SingleProduct/SingleProduct';

const ReviewSection = () => {
  //custom hooks
  const [products, setProducts] = useProduct();

  return (
    <div className='bg-indigo-700'>
      <h2 className='text-5xl text-center text-slate-300 font-mono'>Customer Reviews ({products.length})</h2>
      <div className="reviews grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center my-28 text-center gap-5 px-5">
        {
          products.map(product => <SingleProduct 
          key = {product._id}
          product = {product}
          />)
        }
      </div>
    </div>
  );
};

export default ReviewSection;