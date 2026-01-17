import nodemailer from "nodemailer"
import { APP_PASS, PHONE_NUMBER, USER_EMAIL } from "../config/config.js";

class ContactController {
    // Send emails for incoming project inquiries
    sendEmail = async (req, res) => {
        try {
            const { fullName, email, projectType, projectDescription } = req.body;

            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: USER_EMAIL,
                    pass: APP_PASS
                }
            });

            // Email to Admin - Normal Professional Layout
            const toOwner = {
                from: USER_EMAIL,
                to: USER_EMAIL,
                subject: `New Project Inquiry: ${projectType} - ${fullName}`,
                html: `
                    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
                        <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
                        
                        <p><strong>Full Name:</strong> ${fullName}</p>
                        <p><strong>Email Address:</strong> ${email}</p>
                        <p><strong>Project Type:</strong> ${projectType}</p>
                        
                        <div style="margin-top: 20px;">
                            <p><strong>Project Description:</strong></p>
                            <div style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #ccc;">
                                ${projectDescription}
                            </div>
                        </div>

                        <hr style="border: 0; border-top: 1px solid #eee; margin-top: 30px;">
                        <p style="font-size: 12px; color: #888;">This email was sent from your portfolio contact form.</p>
                    </div>
                `
            };

            // Email to Visitor
            const toVisitor = {
                from: USER_EMAIL,
                to: email,
                subject: "Inquiry Received - Diwas Bk",
                html: `
                    <div style="background-color: #f8fafc; padding: 40px; font-family: sans-serif;">
                        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 16px; padding: 40px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                            <h2 style="color: #1e293b; margin-top: 0;">Hello ${fullName},</h2>
                            <p style="color: #475569; font-size: 16px; line-height: 1.6;">
                                Thank you for reaching out! I've received your request for a <strong>${projectType}</strong> project. 
                                I'm excited to learn more about your ideas and will get back to you within 24-48 hours.
                            </p>
                            
                            <div style="margin: 30px 0; padding: 20px; border-left: 4px solid #3b82f6; background: #f0f7ff;">
                                <p style="margin: 0; font-size: 14px; color: #1e40af;"><strong>Next Steps:</strong> I will review your project details and prepare some initial thoughts for our discussion.</p>
                            </div>

                            <div style="margin-top: 40px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
                                <p style="margin: 0; color: #1e293b; font-weight: bold;">Diwas Bk</p>
                                <p style="margin: 4px 0; color: #64748b; font-size: 14px;">Full Stack Developer</p>
                                <p style="margin: 4px 0; color: #3b82f6; font-size: 14px;">+977-${PHONE_NUMBER}</p>
                            </div>
                        </div>
                    </div>
                `
            };

            try {
                await transporter.sendMail(toOwner);
                await transporter.sendMail(toVisitor);
                res.status(200).send({ message: "Email sent successfully", success: true });

            }
            catch (err) {
                console.log(err);
                res.status(500).send({ message: "Something went wrong.", success: false });
            }

        } catch (err) {
            console.log(err);
            res.status(500).send({
                message: err.message ? `Internal server error: ${err.message}` : "Internal server error.",
                success: false
            });
        };
    };
};

export default ContactController;