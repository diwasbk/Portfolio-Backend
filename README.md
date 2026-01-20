# Backend - Contact Form API

A Node.js backend application that handles contact form submissions and sends email notifications. This service is designed to receive project inquiries and send professional email responses to both the admin and the inquirer.

## Features

- **Contact Form Handler**: Accepts project inquiry submissions
- **Email Notifications**: Sends formatted emails to admin and clients using Nodemailer
- **Schema Validation**: Validates incoming requests using Zod
- **CORS Enabled**: Configured to work with frontend applications
- **Error Handling**: Middleware-based validation and error handling

## Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js
- **Email Service**: Nodemailer
- **Validation**: Zod
- **CORS**: Express CORS middleware
- **Environment**: dotenv for configuration management

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. Clone the repository
   ```bash
   git clone https://github.com/diwasbk/Portfolio-Backend
   cd backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=5000
   USER_EMAIL=your-email@gmail.com
   APP_PASS=your-app-specific-password
   PHONE_NUMBER=your-phone-number
   ```

4. Start the server
   ```bash
   npm run dev
   ```

The server will run on the specified PORT (4200).

## Project Structure

```
backend/
├── app.js                          # Main Express application
├── package.json                    # Project dependencies
├── config/
│   └── config.js                   # Configuration and environment variables
├── routes/
│   └── contactRoutes.js            # API routes for contact endpoints
├── controllers/
│   └── contactController.js        # Business logic for contact form handling
├── middlewares/
│   └── schemValidatorMiddleware.js # Request validation middleware
├── validators/
│   └── schemaValidator.js          # Zod schema definitions
```

## API Endpoints

### POST `/api/contact/send-email`

Sends a contact form submission and triggers email notifications.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "projectType": "fullstack",
  "projectDescription": "I need a responsive website for my business..."
}
```

**Response:**
- **201 Created**: Email sent successfully
- **400 Bad Request**: Invalid request data
- **500 Internal Server Error**: Server error during email sending

## Configuration

### Environment Variables

- `PORT`: Server port (4200)
- `USER_EMAIL`: Gmail account for sending emails
- `APP_PASS`: Gmail app-specific password
- `PHONE_NUMBER`: Contact phone number

### CORS Settings

The application is configured to accept requests from `http://localhost:3000` with credentials support.

## Development

### Running in Development Mode

```bash
npm run dev
```

Uses Nodemon for automatic server restart on file changes.

### Running Tests

```bash
npm test
```

## Dependencies

- **express**: Web framework
- **cors**: Cross-Origin Resource Sharing
- **dotenv**: Environment variable management
- **nodemailer**: Email sending
- **zod**: TypeScript-first schema validation

## Email Templates

The application sends two types of emails:

1. **Admin Notification**: Professional HTML email with all inquiry details
2. **Client Confirmation**: Response email to the inquirer (configurable)

## Security Considerations

- Validate all incoming data using Zod schemas
- Use environment variables for sensitive credentials
- Gmail app-specific passwords should be used instead of regular passwords
- CORS is restricted to specific origin

## Author

[Diwas](https://github.com/diwasbk)

