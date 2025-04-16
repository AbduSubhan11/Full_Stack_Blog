import express from "express";
import { router } from "./routes/blog.route.js";
import { router as authRouter} from "./routes/auth.route.js";
import connectDB from "./connectdb/connect.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v2", router);
app.use("/api/v1", authRouter);


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error.message);
  });
