import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },

  // 🔹 Multiple payers
  paidBy: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      amount: { type: Number, required: true },
    },
  ],

  // 🔹 Multiple splits
  splits: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      amount: { type: Number, required: true },
    },
  ],

  // 🔹 Optional bill image (URL)
  billImage: {
    type: String,  // store image URL (e.g., Cloudinary/S3/Firebase)
    default: null, // optional
  }
},{timestamps: true});

export default mongoose.model("Expense", ExpenseSchema);
