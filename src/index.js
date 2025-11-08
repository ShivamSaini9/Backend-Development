import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config(
  { path: "./env" }
);

connectDB();

// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${fullstackdb}`);
//     app.on("error", (error) => {
//       console.error("Error in server connection:", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//     throw error;
//   }
// })()