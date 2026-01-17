import express from "express"
import ContactController from "../controllers/contactController.js"

const contactRouter = express.Router();
const emailController = new ContactController();

contactRouter.post("/send-email", emailController.sendEmail);

export default contactRouter;