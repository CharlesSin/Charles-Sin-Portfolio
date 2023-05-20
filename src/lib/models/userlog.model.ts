import { Model, Schema } from "mongoose";
import createModel from "../createModel";

interface IUserLog {
  ua: string;
  reviewDate: string;
}

type UserLogModel = Model<IUserLog>;

const userLogSchema = new Schema<IUserLog, UserLogModel>({
  ua: String,
  reviewDate: String,
});

export default createModel<IUserLog, UserLogModel>("userlog", userLogSchema);
