import { useState } from 'react';
import { IoMailOutline } from 'react-icons/io5';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [sending, setSending] = useState(false);

    const validate = (fieldValues = formData) => {
        let temp = { ...errors };

        if ('name' in fieldValues)
            temp.name = fieldValues.name.length >= 2 ? '' : 'Name must be at least 2 characters.';

        if ('email' in fieldValues)
            temp.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValues.email)
                ? ''
                : 'Email is not valid.';

        if ('message' in fieldValues)
            temp.message = fieldValues.message.length >= 10
                ? ''
                : 'Message must be at least 10 characters.';

        setErrors({
            ...temp
        });

        // All fields must be valid
        setIsValid(Object.values(temp).every(x => x === ''));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
        validate(updatedData);
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({ ...touched, [name]: true });
        validate(formData);
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
                setErrors({});
                setTouched({});
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
                <form onSubmit={handleSubmit} noValidate>
                    <div className="input-wrapper">
                        <div className="input-group">
                            <input
                                type="text"
                                name="name"
                                className="form-input"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            {touched.name && errors.name && <span className="error-text">{errors.name}</span>}
                        </div>

                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder="Your email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                            />
                            {touched.email && errors.email && <span className="error-text">{errors.email}</span>}
                        </div>
                    </div>

                    <div className="input-group">
                        <textarea
                            name="message"
                            className="form-input"
                            placeholder="Your message"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        {touched.message && errors.message && <span className="error-text">{errors.message}</span>}
                    </div>

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
