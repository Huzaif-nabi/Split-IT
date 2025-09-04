import mongoose from 'mongoose'

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 6,
    required: true,
    unique: true
  },
  description: {
    type: String,
    maxlength: 255,
  },
  members: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      balance: {
        type: Number,
        default: 0,
      },
    },
  ],
  when: {
    type: Date,
    required: true,
  },
  currency: {
    type: String,
    enum: ["INR", "USD", "MXN"],
    required: true,
  },
});

const Group = mongoose.model('Group', GroupSchema);

export default Group;
