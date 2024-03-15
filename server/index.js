import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
})


app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);