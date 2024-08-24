import search_icon from '../../assets/search_icon.svg';
import ProductList from '../../Components/ProductList';

const Products = () => {
    return (
        <section>
            <section className='flex justify-between p-5 mb-10'>
                <h2 className='font-medium text-lg'>Shop your <span className='text-sky-600 text-3xl font-medium'>favourite products now</span></h2>
                <div className="flex items-center gap-2">
                    <input type="text" placeholder="Enter a product to search" className="h-10 pl-2 pr-10 bg-transparent text-base outline-none border-2 border-black" />
                    <button className="px-3 py-1 bg-black flex items-center gap-1">
                        <h2 className='text-white font-base'>Search</h2>
                        <img src={search_icon} alt="" className='w-8 h-8' />
                    </button>
                </div>
            </section>
            <ProductList />
        </section>
    )
}
export default Products;