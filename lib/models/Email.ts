import { models, model, Schema } from "mongoose";

const Email: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const EmailModel = models.Email || model("Email", Email);

export default EmailModel;
