import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected Successfully")
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/healthhive`);
  } catch (error) {
    console.error(`Failed to connect Database`);
  }
};

export { connectDB };
