import React, { useState } from "react";
import '../sass/contact.sass';

const Contact: React.FC = () => {
    const [body, setBody] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create a mailto link
        const mailtoLink = `mailto:wanyoike39@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open the mailto link in a new tab (which will trigger the email client)
        window.location.href = mailtoLink;

        // Clear the form after sending
        setBody('');
        setSubject('');
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