import type { Product } from '../../types/types';
import './ProductCard.css';
import { Rating } from '@smastrom/react-rating';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className='product-card'>
      <h3>{product.title}</h3>
      <h5>{product.category}</h5>
      <p>${product.price}</p>
      <Rating style={{ maxWidth: 150 }} value={product.rating.rate} readOnly/>
      <img src={product.image} alt={product.title} className='product-image' />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;
