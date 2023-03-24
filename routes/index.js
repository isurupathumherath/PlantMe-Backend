import express from "express";
import userRouter from "./user.route.js";
import inquiryRouter from "./inquiry.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/inquiry", inquiryRouter);

export default apiRouter;
