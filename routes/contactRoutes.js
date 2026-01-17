import express from "express"
import ContactController from "../controllers/contactController.js"
import schemaValidateMiddleware from "../middlewares/schemValidatorMiddleware.js";
import { contactSchema } from "../validators/schemaValidator.js";

const contactRouter = express.Router();
const emailController = new ContactController();

contactRouter.post("/send-email", schemaValidateMiddleware(contactSchema), emailController.sendEmail);

export default contactRouter;