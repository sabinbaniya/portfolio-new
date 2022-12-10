import { models, model, Schema } from "mongoose";

const Error: Schema = new Schema(
  {
    error: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    req: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ErrorModel = models.Error || model("Error", Error);

export default ErrorModel;
