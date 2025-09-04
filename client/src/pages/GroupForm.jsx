import React from 'react'
import Navbar from '../components/Navbar.jsx'

const GroupForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <form className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create Group</h2>

        {/* Group Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Group Name</label>
          <input 
            type="text" 
            placeholder="Enter group name" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
          />
        </div>

        {/* Group Members */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Group Members</label>
          <input 
            type="text" 
            placeholder="Add members (comma separated)" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea 
            placeholder="Enter group description" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
            rows="3"
          ></textarea>
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">When</label>
          <input 
            type="date" 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
          />
        </div>

        {/* Currency */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Currency</label>
          <select 
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="INR">INR (₹)</option>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
          </select>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          Create Group
        </button>
      </form>
    </div>
)}

export default GroupForm