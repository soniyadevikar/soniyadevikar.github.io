import { useState } from 'react';
import { IoMailOutline } from 'react-icons/io5';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isValid, setIsValid] = useState(false);
    const [sending, setSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
        setIsValid(updatedData.name && updatedData.email && updatedData.message);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);

        const modifiedMessage = `${formData.message}\n\n---\nThis message is for Soniya Devikar.`;

        try {
            const response = await fetch('https://contact-api-yunk.onrender.com/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: modifiedMessage,
                }),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
                setIsValid(false);
            } else {
                alert('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Email send error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setSending(false);
        }
    };

    return (
        <>
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="contact-form">
                <h3 className="h3 form-title">Contact Form</h3>
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="name"
                            className="form-input"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <textarea
                        name="message"
                        className="form-input"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="form-btn" disabled={!isValid || sending}>
                        <IoMailOutline />
                        <span>{sending ? 'Sending...' : 'Send Message'}</span>
                    </button>
                </form>
            </section>
        </>
    );
};

export default Contact;
