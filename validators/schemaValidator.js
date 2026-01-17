import { z } from "zod"

export const contactSchema = z.object({
    fullName: z.string("Full name is required.").nonempty("Full name is required.").min(5, "Full name must be at least 5 characters."),
    email: z.string("Email is required.").nonempty("Email is required.").email({ message: "Invalid email." }),
    projectType: z.string("Project type is required.").nonempty("Project type is required."),
    projectDescription: z.string("Project description is required.").nonempty("Project description is required.").min(10, "Project description must be at least 10 characters.")
});