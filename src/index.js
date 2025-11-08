import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
dotenv.config(
  { path: "./env" }
);
const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    })
  })
  .catch((error) => {
    console.error("MONGO db connection failed!!!", error);
  })

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