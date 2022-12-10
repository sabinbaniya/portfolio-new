import { NextApiRequest, NextApiResponse } from "next";
import ConnectDb from "../../lib/database/connectDB";
import EmailModel from "../../lib/models/Email";
import ErrorModel from "../../lib/models/ErrorLog";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const allowedOrigins =
    process.env.NODE_ENV === "production"
      ? "sabinbaniya.com.np"
      : "localhost:3000";

  // only allow request from my domain
  if (req.headers.origin !== allowedOrigins)
    return res.status(400).json({ success: false, message: "Bad Request" });
  // return if request method is not post
  if (req.method !== "POST")
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });

  // return if no email was sent
  if (!req.body?.email)
    return res
      .status(400)
      .json({ success: false, message: "Email is required" });

  const EmailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // return if email format is invalid
  if (!EmailRegex.test(req.body?.email))
    return res.status(400).json({ success: false, message: "Bad Request" });

  try {
    // add email to the db
    await EmailModel.create({ email: req.body.email });
    res.status(200).json({ success: true, message: "Successfully subscribed" });
  } catch (error: any) {
    if (error?.code === 11000) {
      // validation error: email already exists
      return res
        .status(409)
        .json({ success: false, message: "Email already exists" });
    }

    // other error, create log in the database
    await ErrorModel.create({
      error,
      place: "/api/subscribe",
      req: { body: req.body, headers: req.headers, method: req.method },
    });
    return res
      .status(500)
      .json({ success: false, message: "Unknown Error Occured" });
  }
};

export default ConnectDb(handler);
