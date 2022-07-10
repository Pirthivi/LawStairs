import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  file: { type: Object },
  fileName: { type: String, required: true },
  fileType: String,
  category: { type: String },
  fileSize: String,
  date: { type: Date, default: Date.now() },
});

export default mongoose.model("files", fileSchema);
