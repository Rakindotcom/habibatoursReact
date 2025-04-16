import React, { useState } from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const isFormValid =
        formData.name.trim() &&
        formData.email.trim() &&
        formData.message.trim();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) return;
        setIsSubmitting(true);

        emailjs
            .send(
                'service_aiyk7aj',     // Replace with your EmailJS Service ID
                'template_aycb1uj',    // Replace with your EmailJS Template ID
                formData,
                '4glBQLJfGtcnM_4AO'    // Replace with your EmailJS Public Key
            )
            .then(() => {
                setIsSubmitting(false);
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                setIsSubmitting(false);
            });
    };

    return (
        <div className="bg-white flex items-center justify-center p-4 mb-4">
            <div className="flex flex-col md:flex-row w-full max-w-4xl shadow-lg border-2 border-black rounded-lg overflow-hidden">
                {/* Left Panel: Contact Info */}
                <div className="md:w-1/2 bg-[#0d213f] p-6 text-white flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">
                        Contact Us
                    </h1>
                    <div className="text-center space-y-3">
                        <p>
                            📍<span className="bangla">১১ কাজী ভবন, টুকু সরণি (আনন্দরোড), কাফরুল, ঢাকা-১২০৬</span>
                        </p>
                        <p>
                            📧{' '}
                            <a
                                href="mailto:habiba.tours24@gmail.com"
                                className="hover:text-yellow-300"
                            >
                                habiba.tours24@gmail.com
                            </a>
                        </p>
                        <p>
                            ☎️{' '}
                            <a
                                href="tel:01912939664"
                                className="hover:text-yellow-300"
                            >
                                01912-939664
                            </a>
                        </p>
                    </div>
                    <div className="text-center font-bold text-amber-200 text-xl mt-6 mb-4">
                        Connect with us on social media
                    </div>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="block w-10 h-10">
                            <FaWhatsapp className="w-full h-full text-white hover:text-yellow-300" />
                        </a>
                        <a href="#" className="block w-10 h-10">
                            <FaFacebook className="w-full h-full text-white hover:text-yellow-300" />
                        </a>
                        <a href="#" className="block w-10 h-10">
                            <FaInstagram className="w-full h-full text-white hover:text-yellow-300" />
                        </a>
                        <a href="#" className="block w-10 h-10">
                            <FaTelegram className="w-full h-full text-white hover:text-yellow-300" />
                        </a>
                    </div>
                </div>

                {/* Right Panel: Contact Form */}
                <div className="md:w-1/2 bg-white p-6 text-gray-800">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full p-3 rounded-md border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full p-3 rounded-md border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message"
                            className="w-full p-3 h-30 rounded-md border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            disabled={isSubmitting || !isFormValid}
                            className={`w-full py-3 rounded-md text-white font-semibold focus:outline-none ${isSubmitting || !isFormValid
                                    ? 'bg-teal-900 cursor-not-allowed'
                                    : 'bg-teal-900 hover:bg-teal-700'
                                }`}
                        >
                            {isSubmitting ? 'Sending...' : 'Proceed'}
                        </button>
                    </form>
                    {submitted && (
                        <p className="mt-4 text-center text-green-600 font-medium">
                            Thank you for reaching out!
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;