import { useFetch } from '../utils/useFetch';
import ProductItem from './ProductItem';
import Loading from './Loading';

const ProductList = ({ searchText }) => {
  const { productData,loading } = useFetch('https://dummyjson.com/products');
  const products = productData && productData.products ? productData.products : [];
  const filterdProduct = products.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()));
  return (
    <>
      {loading ? <Loading /> :<div className='flex flex-wrap justify-center items-center gap-4 w-4/5 mx-auto'>
        {
          filterdProduct.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))
        }
      </div>}
    </>
  )
}

export default ProductList