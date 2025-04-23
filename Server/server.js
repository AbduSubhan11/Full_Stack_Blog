import express from "express";
import { router } from "./routes/blog.route.js";
import { router as authRouter } from "./routes/auth.route.js";
import connectDB from "./connectdb/connect.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser()); 
app.use("/api/v2", router);
app.use("/api/v1", authRouter);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is runnin`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error.message);
  });
