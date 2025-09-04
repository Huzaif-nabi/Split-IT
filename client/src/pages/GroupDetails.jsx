import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import dummyGroups from "../assets/groups.js";
import dummyUsers from "../assets/users.js";

const GroupDetails = () => {
    const { id } = useParams(); // group ID from URL
    const group = dummyGroups.find((g) => g._id === id);

    const [showExpenseForm, setShowExpenseForm] = useState(false);
    const [showMemberForm, setShowMemberForm] = useState(false);
    const [amount, setAmount] = useState("");
    const [splitMethod, setSplitMethod] = useState("equal");
    const [exactSplits, setExactSplits] = useState({});
    const [memberId, setMemberId] = useState("");

    if (!group) {
        return (
            <div className="min-h-screen">
                <Navbar />
                <div className="p-6 text-center">
                    <h2 className="text-xl font-bold text-red-500">Group not found!</h2>
                </div>
            </div>
        );
    }

    // Expand members with user details
    const members = group.members.map((m) => {
        const user = dummyUsers.find((u) => u._id === m.userId);
        return { ...user, balance: m.balance };
    });

    // Add expense handler
    const handleAddExpense = (e) => {
        e.preventDefault();
        const amt = parseFloat(amount);

        if (splitMethod === "equal") {
            const split = amt / members.length;
            members.forEach((m) => {
                m.balance += split; // add equal share
            });
            console.log(`Expense of ₹${amt} split equally: ₹${split} each`);
        } else {
            // exact split
            let total = 0;
            members.forEach((m) => {
                const val = parseFloat(exactSplits[m._id]) || 0;
                total += val;
                m.balance += val;
            });

            if (total !== amt) {
                alert("Exact splits do not add up to total amount!");
                return;
            }
            console.log(`Expense of ₹${amt} split exactly`, exactSplits);
        }

        setAmount("");
        setExactSplits({});
        setSplitMethod("equal");
        setShowExpenseForm(false);
    };

    // Add member handler
    const handleAddMember = (e) => {
        e.preventDefault();
        const user = dummyUsers.find((u) => u._id === memberId);
        console.log(`Added member: ${user?.name}`);
        setMemberId("");
        setShowMemberForm(false);
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="p-6 max-w-4xl mx-auto">
                {/* Group Info */}
                <h2 className="text-3xl font-bold mb-2">{group.name}</h2>
                <p className="mb-1 text-gray-700">
                    <strong>Description:</strong> {group.description}
                </p>
                <p className="mb-1 text-gray-700">
                    <strong>When:</strong> {group.when}
                </p>
                <p className="mb-1 text-gray-700">
                    <strong>Currency:</strong> {group.currency}
                </p>

                {/* Members */}
                <h3 className="text-2xl font-semibold mt-6 mb-3">Members</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {members.map((member) => (
                        <div
                            key={member._id}
                            className="bg-white shadow-md rounded-xl p-4"
                        >
                            <h4 className="font-bold text-lg">{member.name}</h4>
                            {member.balance > 0 ? (
                                <p className="text-green-600">
                                    They owe you {group.currency} {member.balance}
                                </p>
                            ) : member.balance < 0 ? (
                                <p className="text-red-500">
                                    You owe them {group.currency} {Math.abs(member.balance)}
                                </p>
                            ) : (
                                <p className="text-gray-500">Settled up</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                    <button
                        onClick={() => setShowExpenseForm(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Add Expense
                    </button>
                    <button
                        onClick={() => setShowMemberForm(true)}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                    >
                        Add Member
                    </button>
                </div>

                {/* Add Expense Form */}
                {showExpenseForm && (
                    <form
                        onSubmit={handleAddExpense}
                        className="mt-4 p-4 bg-white shadow-md rounded-xl"
                    >
                        <h4 className="font-bold mb-2">Add Expense</h4>

                        {/* Amount */}
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter total amount"
                            className="border p-2 w-full mb-2 rounded"
                            required
                        />


                        {/* Split Method */}
                        <select
                            value={splitMethod}
                            onChange={(e) => setSplitMethod(e.target.value)}
                            className="border p-2 w-full mb-2 rounded"
                        >
                            <option value="equal">Split Equally</option>
                            <option value="exact">Split Exactly</option>
                        </select>

                        {/* Splits */}
                        {splitMethod === "exact" &&
                            members.map((m) => (
                                <div key={m._id} className="mb-2">
                                    <label className="block text-sm font-medium">
                                        {m.name}'s Share:
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        value={exactSplits[m._id] || ""}
                                        onChange={(e) =>
                                            setExactSplits({
                                                ...exactSplits,
                                                [m._id]: e.target.value,
                                            })
                                        }
                                        className="border p-2 w-full rounded"
                                    />
                                </div>
                            ))}

                        {/* Bill Image Upload (Optional) */}
                        <div className="mb-2">
                            <label className="block text-sm font-medium">Bill Image (optional)</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => console.log("Bill image selected:", e.target.files[0])}
                                className="border p-2 w-full rounded"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 mt-2"
                        >
                            Save
                        </button>
                    </form>
                )}


                {/* Add Member Form */}
                {showMemberForm && (
                    <form
                        onSubmit={handleAddMember}
                        className="mt-4 p-4 bg-white shadow-md rounded-xl"
                    >
                        <h4 className="font-bold mb-2">Add Member</h4>
                        <select
                            value={memberId}
                            onChange={(e) => setMemberId(e.target.value)}
                            className="border p-2 w-full mb-2 rounded"
                            required
                        >
                            <option value="">Select User</option>
                            {dummyUsers.map((user) => (
                                <option key={user._id} value={user._id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                        <button
                            type="submit"
                            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                        >
                            Add
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default GroupDetails;
