import React, { useState } from 'react'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between px-12 py-4 mt-4 text-white relative">
            {/* Logo */}
            <h3 className="text-3xl font-bold tracking-widest">Settle-it</h3>

            {/* Menu Icon */}
            <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 cursor-pointer" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>

            {/* Overlay Menu */}
            {isMenuOpen && (
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-white p-6 shadow-xl z-50 transform transition-transform duration-300 ease-in-out rounded-l-2xl`}
                >
                    <button
                        className="text-blue-500 mb-6 text-lg font-semibold hover:text-gray-200"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        ✕ Close
                    </button>
                    <nav className="flex flex-col space-y-4 text-blue-500">
                        <span className="flex items-center space-x-2 p-2 rounded hover:bg-indigo-100 cursor-pointer transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
                            </svg>
                            <span>Dashboard</span>
                        </span>
                        <span className="flex items-center space-x-2 p-2 rounded hover:bg-indigo-100 cursor-pointer transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            <span>Create Group</span>
                        </span>
                        <span className="flex items-center space-x-2 p-2 rounded hover:bg-indigo-100 cursor-pointer transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v4m0 0v4m0-4h4m-4 0H8" />
                            </svg>
                            <span>Sign Up</span>
                        </span>
                        <span className="flex items-center space-x-2 p-2 rounded hover:bg-indigo-100 cursor-pointer transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A4 4 0 0112 14a4 4 0 016.879 3.804M12 12a4 4 0 110-8 4 4 0 010 8z" />
                            </svg>
                            <span>Profile</span>
                        </span>
                    </nav>
                </div>
            )}




        </nav>
    )
}

export default Navbar