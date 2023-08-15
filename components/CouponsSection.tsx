import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from "./SlideUp"

const coupons = [
    {
        name: "Coupons",
       
      },
     
]

const CouponsSection = () => {
  return (
    <section id="coupons">
      <h1 className="my-4 text-center font-bold text-4xl">
        Coupons
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {coupons.map((project, idx) => {
          return (
            <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
  <div className="bg-gray-700 p-10 text-white flex flex-col items-center space-y-4 aspect-ratio-[1/1] rounded">
    <h1 className="text-4xl font-bold mb-4 text-center">Get $125 in Microsoft ads when you spend $25</h1>
    <p className="text-xl mb-4 text-center">Elevate Your Small Business with Free ADs </p>
    <div className="flex space-x-4">
      <a href="On Its Way" className="bg-pink-500 p-4 hover:bg-pink-700 text-white rounded text-center"> Learn More</a>
      <a href="On Its Way" className="bg-red-500 p-4 hover:bg-red-700 text-white rounded text-center"> Get Coupon</a>
    </div>
  </div>
  <SlideUp offset="-300px 0px -300px 0px">
  <div className="bg-gray-900 p-10 text-white flex flex-col items-center space-y-4 aspect-ratio-[1/1] rounded">
    <h1 className="text-4xl font-bold mb-4 text-center">$100 Bonus for New Remotasks users who make $150 on tasks</h1>
    <p className="text-xl mb-4 text-center">Get Paid to Review AI language models</p>
    <div className="flex space-x-4">
      <a href="On Its Way" className="bg-teal-500 p-4 hover:bg-teal-700 text-white rounded text-center"> Learn More</a>
      <a href="https://www.remotasks.com/r/ON4M6YVK" className="bg-blue-500 p-4 text-white hover:bg-blue-700 rounded text-center">Get Coupon</a>
    </div>
  </div>
  </SlideUp>
  <SlideUp offset="-300px 0px -300px 0px"></SlideUp>
  <div className="bg-gray-800 p-10 text-white flex flex-col items-center space-y-4 aspect-ratio-[1/1] rounded">
    <h1 className="text-4xl font-bold mb-4 text-center">Free Week of Tech Courses on Coursera</h1>
    <p className="text-xl mb-4 text-center">Get your Google IT Certificate in just 6 months!</p>
    <div className="flex space-x-4">
      <a href="On Its Way" className="bg-orange-500 p-4 hover:bg-orange-700 text-white rounded text-center"> Learn More</a>
      <a href="http://fbuy.me/v/dyanajbutler98" className="bg-yellow-500 p-4 hover:bg-yellow-700 text-white rounded text-center">Get Coupon</a>
    </div>
  </div>
</div>
            </SlideUp>
            </div>
            
          )
        })}
        
      </div>
    </section>
  )
}

export default CouponsSection

