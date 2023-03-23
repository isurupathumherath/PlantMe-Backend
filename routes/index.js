import express from "express";
import userRouter from "./user.route.js";
import deliveryRoute from "./deliveryDetails.routes.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/delivery", deliveryRoute);

export default apiRouter;
