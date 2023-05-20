import { connection, connect } from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import userLogModel from "../../lib/models/userlog.model";

const uri: string = process.env.MONGODB_URI || "";

export default async function userlog(req: NextApiRequest, res: NextApiResponse) {
  try {
    await connect(uri);
    const testObject = new userLogModel({
      reviewDate: `${new Date()}`,
    });

    await testObject.save();

    res.status(201).json({
      msg: "done",
    });

    // Erase test data after use
    connection.db.dropCollection(userLogModel.collection.collectionName);
  } catch (err) {
    res.status(400).json(err);
  }
}
