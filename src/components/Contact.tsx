import React, { useState } from "react";
import '../sass/contact.sass';

const Contact: React.FC = () => {
    const [body, setBody] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-whatsapp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ subject, body }),
            });
    
            const data = await response.json();
    
            if (data.success) {
                alert('Email sent successfully');
                setBody('');
                setSubject('');
            } else {
                alert('Message not sent');
            }
        } catch (error) {
            console.error('Email not sent:', error);
            alert('Message not sent!');
        }
        
    };

    return (
        <div className="contact">
            <h3>LET'S CREATE A CONNECTION!</h3>
            <form onSubmit={handleSubmit} className="form">
                <label htmlFor="subject">
                    <input type="text" id="subject" name="subject" placeholder="Message Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                </label>
                <label htmlFor="body">
                    <textarea name="body" id="body" placeholder="Message body" cols={40} rows={10} value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </label>
                <button type="submit">Send Message</button>
            </form>
            
        </div>
    )
}

export default Contact;