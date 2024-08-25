import mongoose from "mongoose";

export const DbConnection = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB connection error:", err));
};
