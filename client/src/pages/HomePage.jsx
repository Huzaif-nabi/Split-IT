import React from 'react'
import Navbar from '../components/navbar'
import homeimg01 from '../assets/homeimg01.png'
import homeimg02 from '../assets/homeimg02.png'
import bill from '../assets/bill.jpg'

const HomePage = () => {
    return (
        <div>
            <Navbar />

            {/* Top Section */}
            <div className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-12 max-w-7xl mx-auto">
                {/* Left Side */}
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold">Discover all the features</h1>
                    <p className="text-lg md:text-xl text-white/90">
                        No more complicated calculations or forgotten payments. Whether you’re traveling, dining out,
                        or sharing bills, Settle-It helps you track, split, and settle expenses effortlessly.
                    </p>
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                        Get started
                    </button>
                </div>

                {/* Right Side */}
                <div className="relative md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img src={homeimg01} alt="Group" className="rounded-xl shadow-lg w-full max-w-md" />
                </div>
            </div>

            {/* Main Features Column */}
            <div className="bg-gradient-to-b from-[#3b82f6] to-[#294fb5] py-12 mx-6">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Explore what Split-It has to offer</h1>
                    <h4 className="text-xl md:text-xl font-semibold text-white mb-6">Main Features</h4>
                    <ul className="space-y-2 text-white text-base md:text-lg list-disc list-inside">
                        <li className="text-lg md:text-xl text-white/90">Expense Tracking</li>
                        <li className="text-lg md:text-xl text-white/90">Amount Customization</li>
                        <li className="text-lg md:text-xl text-white/90">Expenses Settle Up</li>
                        <li className="text-lg md:text-xl text-white/90">Upload bill image</li>
                    </ul>
                </div>
            </div>

            {/* Multiple Currencies Section */}
            <div className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-12 max-w-7xl mx-auto gap-x-12">
                {/* Left Side Text */}
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-black">Use multiple currencies</h1>
                    <p className="text-lg md:text-xl text-white">
                        Traveling abroad? Split-It automatically converts expenses into a single currency, so everyone knows exactly what they owe.
                    </p>
                </div>

                {/* Right Side Image */}
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img
                        src={homeimg02}
                        alt="Multiple Currencies"
                        className="rounded-xl shadow-lg w-full max-w-md"
                    />
                </div>
            </div>

            {/* Bill Upload Section */}
            <div className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-12 max-w-7xl mx-auto gap-x-12">
                {/* Left Side Text */}
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-black">Share Bill photos when sharing expenses</h1>
                    <p className="text-lg md:text-xl text-white">
                        Attach photos of receipts to your expenses, so everything is clear and in one place.
                    </p>
                </div>

                {/* Right Side Image */}
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img
                        src={bill}
                        alt="Bill Upload"
                        className="rounded-xl shadow-lg w-full max-w-md"
                    />
                </div>
            </div>

        </div>
    )
}

export default HomePage
