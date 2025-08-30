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
                <div className="absolute top-full right-6 w-48 bg-gray-800 p-4 rounded shadow-lg flex flex-col space-y-2 -mt-1 z-50">
                    <span>Dashboard</span>
                    <span>Create Group</span>
                    <span>Sign Up</span>
                    <span>Profile</span>
                </div>
            )}

        </nav>
    )
}

export default Navbar