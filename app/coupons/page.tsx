import React from "react";
import GalleryNavbar from "@/components/GalleryNavbar";

const CouponPage: React.FC = () => {
    return (
        <>
            <GalleryNavbar />
            <div className="bg-gray-400 p-10 text-white flex flex-col items-center space-y-4">
                <h1 className="text-6xl p-24 text-white text-center"> </h1>
            </div>
            <div className="flex flex-wrap p-24">
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <div className="bg-gray-700 p-10 text-white flex flex-col items-center space-y-4">
                        <h1 className="text-4xl font-bold mb-4 text-center">Get $125 in Microsoft ads when you spend $25</h1>
                        <p className="text-xl mb-4 text-center">Elevate Your Small Business with Free ADs </p>
                       
                        <a href="link1" className="bg-red-500 p-4 text-white rounded w-full text-center block"> Get Coupon</a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <div className="bg-gray-900 p-10 text-white flex flex-col items-center space-y-4">
                        <h1 className="text-4xl font-bold mb-4 text-center">$100 Bonus for New Remotasks users</h1>
                        <p className="text-xl mb-4 text-center">Get Paid to Review AI language models</p>
                        
                        <a href="link2" className="bg-blue-500 p-4 text-white rounded w-full text-center block">Get Coupon</a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <div className="bg-gray-800 p-10 text-white flex flex-col items-center space-y-4">
                        <h1 className="text-4xl font-bold mb-4 text-center">Free Week of Tech Courses on Coursera</h1>
                        <p className="text-xl mb-4 text-center">Get your Google IT Certificate in just 6 months!</p>
                        
                        <a href="link2" className="bg-yellow-500 p-4 text-white rounded w-full text-center block">Get Coupon</a>
                    </div>
                </div>
            </div>  
        </>
    );
};

export default CouponPage;



