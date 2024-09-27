require('dotenv').config();
import { VercelRequest, VercelResponse } from '@vercel/node';
import twilio from 'twilio';

const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID!;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN!;
const client = twilio(twilioAccountSid, twilioAuthToken);

interface Message {
    subject: string;
    body: string;
}

export default async function sendWhatsAppNotification(req: VercelRequest, res: VercelResponse) {
    
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { subject, body }: Message = req.body;

    if (!subject || !body) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    try {
        await client.messages.create({
            from: process.env.WHATSAPP_FROM!,
            to: process.env.WHATSAPP_TO!,
            body: `${subject}\n\n${body}`,
        });
        return res.status(200).json({ success: true, message: 'WhatsApp message sent successfully' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Failed to send WhatsApp message' });
    }
    
}





// const express = require('express');
/*import express, { Request, Response } from 'express';
// const nodeMailer = require('nodemailer');
import nodemailer, { SendMailOptions } from 'nodemailer';
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
// const PORT = process.env.PORT;

// middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter with gmail credentials
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    },
});

// handle form submission
 app.post('/api/send-email', (req, res) => {
    const { email, subject, body } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject,
        text: body,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send({ success: false });
        } else {
            res.send({ success: true });
        }
    });
})

// start server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

// serverless function to handle sending emails
export default async function sendEmail(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

    const { email, subject, body } = req.body;

    if (!email || !subject || !body) return res.status(400).json({ message: 'Missing required fields' });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject,
        text: body,
    };
    
    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Email not sent' });
    }
}*/
