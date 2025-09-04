import React from "react";
import { useNavigate } from "react-router-dom";
import GroupCard from "../components/GroupCard.jsx";
import dummyGroups from "../assets/groups.js";
import Navbar from "../components/Navbar.jsx";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      {/* Header Section */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800">Your Groups</h2>
        <button
          onClick={() => navigate("/groupform")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200"
        >
          + Create Group
        </button>
      </div>

      {/* Group Cards Section */}
      <div className="grid gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">
        {dummyGroups.map((group) => (
          <GroupCard
            key={group._id}
            _id = {group._id}
            name={group.name}
            owe={group.owe}
            owed={group.owed}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
