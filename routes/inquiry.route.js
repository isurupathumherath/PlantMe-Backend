import express from "express";
import {
  saveInquiryController,
  getInquiryController,
  getInquiryByCustomerIdController,
  getInquiryByIdController,
  updateInquiryController,
  deleteInquiryController,
} from "../controllers/index.js";
// import { authenticate } from "../middleware/auth.middleware.js";

const inquiryRouter = express.Router();

// inquiryRouter.post("/", authenticate, saveInquiryController);
// inquiryRouter.put("/:id", updateInquiryController);
// inquiryRouter.delete("/:id", deleteInquiryController);
// inquiryRouter.get("/:id", getInquiryByIdController);
// inquiryRouter.get("/", getInquiryController);
// inquiryRouter.get("/cus/:id", getInquiryByCustomerIdController);

inquiryRouter.post("/", saveInquiryController);
inquiryRouter.put("/:id", updateInquiryController);
inquiryRouter.delete("/:id", deleteInquiryController);
inquiryRouter.get("/:id", getInquiryByIdController);
inquiryRouter.get("/", getInquiryController);
inquiryRouter.get("/cus/:id", getInquiryByCustomerIdController);

export default inquiryRouter;
