import React from "react";
import { useNavigate } from "react-router-dom";

const GroupCard = ({ _id, name, owe, owed }) => {
    const navigate = useNavigate();
  return (
    <div  onClick={() => navigate(`/groups/${_id}`)} className="bg-white rounded-xl shadow-md p-5 w-full max-w-md mx-auto border border-gray-200 hover:shadow-lg transition duration-200">
      {/* Group Name */}
      <h2 className="text-lg font-semibold text-gray-800 mb-3">{name}</h2>

      {/* Balances */}
      <div className="flex justify-between text-sm">
        <p className="text-red-500 font-medium">You owe: ₹{owe}</p>
        <p className="text-green-600 font-medium">Owed to you: ₹{owed}</p>
      </div>
    </div>
  );
};

export default GroupCard;
