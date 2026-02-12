import { connectToDatabase } from "./database/mongoose.ts";
import dotenv from "dotenv";

dotenv.config();

async function testConnection() {
  try {
    console.log("Attempting to connect to MongoDB...");
    await connectToDatabase();
    console.log("SUCCESS: Database connection established successfully!");
    process.exit(0);
  } catch (error) {
    console.error("FAILURE: Could not connect to the database.");
    console.error(error);
    process.exit(1);
  }
}

testConnection();
