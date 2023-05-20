import { Model, Schema } from "mongoose";
import createModel from "../createModel";

interface IUserLog {
  host: string;
  referer: string;
  reviewDate: string;
  ua: string;
}

type UserLogModel = Model<IUserLog>;

const userLogSchema = new Schema<IUserLog, UserLogModel>({
  host: String,
  referer: String,
  reviewDate: String,
  ua: String,
});

export default createModel<IUserLog, UserLogModel>("userlog", userLogSchema);
