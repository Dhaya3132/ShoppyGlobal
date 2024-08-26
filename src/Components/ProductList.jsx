import { useFetch } from '../utils/useFetch';
import ProductItem from './ProductItem';

const ProductList = () => {
  const { productData } = useFetch('https://dummyjson.com/products');
  const products = productData && productData.products ? productData.products : [];
  return (
    <div className='flex flex-wrap justify-center items-center gap-4 w-4/5 mx-auto'>
      {
        products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))
      }
    </div>
  )
}

export default ProductList