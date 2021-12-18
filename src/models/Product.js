import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: String,
    description: String,
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    price: Number,
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Product", productSchema);