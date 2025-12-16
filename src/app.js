import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import {User} from "./models/user.model.js";
import {redirectIfAuthenticated} from "./middlewares/redirectIfAuthenticated.middleware.js";
import {requireAuth} from "./middlewares/requireAuth.middleware.js";
const app = express();

app.set("view engine", "ejs");
app.set("views","src/views");

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static("public"));
app.use(cookieParser());


app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));

//public routes
app.get("/", redirectIfAuthenticated,async (req,res) => {
  return res.render("home");
})
app.get("/login",redirectIfAuthenticated, async (req,res) => {
  return res.render("login");
})
app.get("/signup",redirectIfAuthenticated, async (req,res) => {
  return res.render("signup");
})
//protected routes
app.get("/dashboard",requireAuth, async (req,res) => {
  const users = await User.find();
  return res.render("dashboard", {user: req.user, users});
})





// Routes would be added here
import userRouter from "./routes/user.routes.js";
import { verify } from "crypto";
//routes declaration
app.use("/api/v1/users", userRouter);

export default app;