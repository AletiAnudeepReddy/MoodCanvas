import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
  fullname: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  imageUrl: { type: String }, // optional
}, {
  timestamps: true // adds createdAt & updatedAt
});

export default models.User || model("User", UserSchema);
