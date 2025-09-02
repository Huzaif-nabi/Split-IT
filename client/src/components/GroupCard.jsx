import React from 'react'

const GroupCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 w-full max-w-md mx-auto border border-gray-200 hover:shadow-lg transition duration-200">
      {/* Group Name */}
      <h2 className="text-lg font-semibold text-gray-800 mb-3">hello</h2>

      {/* Balances */}
      <div className="flex justify-between text-sm">
        <p className="text-red-500 font-medium">You owe: ₹887</p>
        <p className="text-green-600 font-medium">Owed to you: ₹099</p>
      </div>
    </div>
  )
}

export default GroupCard
