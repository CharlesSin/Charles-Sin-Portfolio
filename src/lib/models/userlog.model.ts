import { Model, Schema } from "mongoose";
import createModel from "../createModel";

interface IUserLog {
  first: string;
  last: string;
  reviewDate: string;
}

type UserLogModel = Model<IUserLog>;

const userLogSchema = new Schema<IUserLog, UserLogModel>({
  first: String,
  last: String,
  reviewDate: String,
});

export default createModel<IUserLog, UserLogModel>("userlog", userLogSchema);
