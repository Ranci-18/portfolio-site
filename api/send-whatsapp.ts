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