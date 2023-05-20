import { connect } from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import userLogModel from "../../lib/models/userlog.model";

const uri: string = process.env.MONGODB_URI || "";

export default async function userlog(req: NextApiRequest, res: NextApiResponse) {
  const userAgent = req.headers["user-agent"];
  const {
    query: { browserRef },
  } = req;

  try {
    await connect(uri);
    const userLogObject = new userLogModel({
      ua: userAgent || "",
      referer: browserRef || "",
      host: req.headers.host || "",
      reviewDate: `${new Date()}`,
    });

    await userLogObject.save();

    res.status(201).json({
      msg: "done",
    });
  } catch (err) {
    res.status(400).json(err);
  }
}
