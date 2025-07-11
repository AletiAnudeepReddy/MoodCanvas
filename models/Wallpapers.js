import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const WallpaperSchema = new Schema({
  email:       { type: String, required: true },
  quote:       { type: String, required: true },
  wallpaperUrl:{ type: String, required: true },
}, {
  timestamps: true // createdAt and updatedAt
});

export default models.Wallpaper || model("Wallpaper", WallpaperSchema);
