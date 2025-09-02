import React from "react";
import Navbar from "../components/Navbar.jsx";
import GroupCard from "../components/GroupCard.jsx";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-800">Your Groups</h3>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow-md hover:bg-blue-700 transition">
            + Create Group
          </button>
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
