const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mediaSchema = new Schema(
  {
    fieldname: { type: String, required: true },
    originalname: { type: String, required: true },
    encoding: { type: String, required: true },
    mimetype: { type: String, required: true },
    destination: { type: String, required: true },
    filename: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: Number, required: true },
  },
  { timestamps: true }
);

mediaSchema.pre("save", function (next) {
  this.path = this.path.replace("uploads\\", "");
  this.path = this.path.replace("uploads/", "");
  next();
});

mediaSchema.pre("findOneAndUpdate", async function (next) {
  const data = this.getUpdate();
  if (data.path !== undefined) {
    try {
      data.path = data.path.replace("uploads\\", "");
      data.path = data.path.replace("uploads/", "");
      this.setUpdate(data);
    } catch (e) {
      next(e);
    }
  }
  next();
});

module.exports = mongoose.model("Media", mediaSchema, "media");
