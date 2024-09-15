import { useFetch } from '../utils/useFetch'; // Fetch product custom hook
import ProductItem from './ProductItem'; // product Card component
import Loading from './Loading'; // loading animation

const ProductList = ({ searchText }) => {
  const { productData, loading } = useFetch('http://localhost:5000/api/product/listProducts');
  const products = Array.isArray(productData) ? productData : [];
  // console.log(productData) // custom hook destrcuting the result
  // const products = productData && productData.products ? productData.products : []; // to check the api response is weather single product or whole product.
  const filteredProducts = products.filter(product =>
    product.name && product.name.toLowerCase().includes(searchText.toLowerCase())
  ); // filtering product based on search field.
  return (
    <>
      {loading ? <Loading /> :
        <div className='flex flex-wrap justify-center items-center gap-4 w-4/5 mx-auto'>
          {
            filteredProducts.map((product) => (<ProductItem product={product} key={product._id} />))
          }
        </div>}
    </>
  )
}

export default ProductList;
// shows all product data