import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,

  password: { type: Number, required: true },
  date: Date,
});

export default mongoose.model("userSignupDetails", userSchema);
