import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const ConnectDb =
  (handler: Function) => async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connections[0].readyState) {
      return handler(req, res);
    }
    mongoose.connect(process.env.DATABASE_URL as string);

    return handler(req, res);
  };
export default ConnectDb;
