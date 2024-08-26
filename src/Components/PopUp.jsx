import verified_icon from '../assets/verified_icon.svg';
const PopUp = () => {
    return (
        <div className='flex justify-center'>
            <div className="bg-white border-b-4 border-blue-500 shadow-sm flex items-center gap-3 w-fit p-3">
                <h2 className='font-medium text-lg'>Your Product has been added to your cart!!</h2>
                <img src={verified_icon} alt="" className='w-5 h-5' />
            </div>
        </div>

    )
}

export default PopUp;