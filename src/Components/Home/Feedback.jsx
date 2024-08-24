import { useFetch } from "../../utils/useFetch";
import star_icon from '../../assets/star_icon.svg';
const Feedback = () => {
    const { productData } = useFetch('https://dummyjson.com/products');
    return (
        <div className="mt-10 mb-10">
            <h2 className="font-semibold text-3xl text-center">Our happy Customer</h2>
            <div className="overflow-hidden whitespace-nowrap mt-10">
                <ul className="flex justify-center items-center gap-5 animate-Move">
                    {
                        productData.map((product) => (
                            product.reviews.filter(review => review.rating > 4)
                                .map((reviews) => (
                                    <li className="rounded-xl p-5 bg-Vermillion text-black shadow-md">
                                        <div className="flex items-center gap-1 bg-white text-black float-right px-3 py-1 rounded-full">
                                            <img src={star_icon} alt="" className="w-4 h-4" />
                                            <p>{reviews.rating}</p>
                                        </div>
                                        <div className="mt-10 text-white">
                                            <h2 className="font-semibold text-lg">{reviews.reviewerName}</h2>
                                            <p className="font-semibold text-2xl">{reviews.comment}</p>
                                        </div>

                                    </li>
                                ))
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Feedback;