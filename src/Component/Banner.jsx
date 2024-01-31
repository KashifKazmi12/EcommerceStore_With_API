import banner2 from '../images/banner/banner2.png'

const Banner = () => {
    return (
        <div className=" mx-auto py-5 md:py-8 px-0 md:px-0" style={{position:'relative'}}>
            <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-200 py-6 px-6 md:py-12 lg:px-12 md:w-full">
                    <div className="flex flex-col justify-center md:w-3/4 py-8">
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Best Deal - Go Premium Today</h1>
                        <p className="text-base lg:text-medium text-gray-800 mt-2">
                        Upgrade now for a  <span className="font-bold">30%</span> discount on every purchase. Enjoy exclusive benefits and limited-time savings. Elevate your experience – act fast!
                        </p>
                    </div>
                    <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
                        <img className='h-96' src={banner2} alt="" style={{position:'absolute', top:-20 }}/>
                    </div>
                    {/* <div className="h-40 mt-8 md:mt-0 flex justify-center md:justify-end" style={{transform:'rotate(30deg)'}}>
                        <img src={banner1} alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;