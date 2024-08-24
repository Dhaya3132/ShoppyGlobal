import search_icon from '../../assets/search_icon.svg';
import ProductList from '../../Components/ProductList';

const Products = () => {
    return (
        <div>
            <div className='flex justify-between p-5 mb-10'>
                <h2 className='font-semibold text-4xl'>Shop your <span className='text-Vermillion text-4xl font-semibold'>favourite products now</span></h2>
                <div className="flex items-center gap-2">
                    <input type="text" placeholder="Enter a product to search" className="h-10 pl-2 pr-10 bg-transparent text-base rounded-md outline-none border-2 border-black" />
                    <button className="px-3 py-1 bg-black rounded-md flex items-center gap-1">
                        <h2 className='text-white font-medium '>Search</h2>
                        <img src={search_icon} alt="" className='w-8 h-8' />
                    </button>
                </div>
            </div>
            <ProductList />
        </div>
    )
}
export default Products;