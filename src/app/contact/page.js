'use client';
import { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setData((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    };

    const validateForm = () => {
        if (!data.name || !data.email || !data.message) {
            return false;
        }
        return true;
    };

    const Submit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        if (!validateForm()) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'All fields are required!',
            });
            setIsSubmitting(false);
            return;
        }

        try {
            // Web3Forms ke liye data banana
            const formData = new FormData();
            formData.append("access_key", "6188881b-88e7-4909-958d-04480a416db4"); // apna key
            formData.append("subject", "New Contact Form Submission"); 
            formData.append("from_name", data.name);
            formData.append("from_email", data.email);
            formData.append("message", data.message);

            // yaha tum apna direct receiver email laga do
            formData.append("to_email", "aliusmanijaz143@gmail.com");

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            }).then((res) => res.json());

            if (res.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'Your message has been successfully sent.',
                });
                setData({ name: '', email: '', message: '' });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Something went wrong. Please try again.',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to send message. Please check your connection.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden mt-36 mb-24">
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gray-700"></div>
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gray-700"></div>

                <div className="grid md:grid-cols-2 gap-8 py-8 px-6">
                    <div className="flex flex-col">
                        <div className="mt-10">
                            <h1 className="text-4xl font-bold">Get in Touch</h1>
                            <p className="text-md mt-5 text-justify">
                                Have questions or feedback? We are here to help! Reach out to us today and lets embark on this educational adventure together!
                            </p>
                            
                            <p className="mt-5">
                                <i className="fa-solid fa-envelope"></i>
                                <span className="ml-5">aliusmanijaz143@gmail.com</span>
                            </p>
                        </div>
                    </div>

                    <form className="rounded-tl-3xl rounded-bl-3xl" onSubmit={Submit}>
                        <h2 className="text-2xl text-gray-800 font-bold text-center mb-6">Contact us</h2>
                        <div className="max-w-md mx-auto space-y-3 relative mb-7">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm border-none outline-none"
                                name="name"
                                value={data.name}
                                onChange={inputEvent}
                                autoComplete="off"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm border-none outline-none"
                                name="email"
                                value={data.email}
                                onChange={inputEvent}
                                autoComplete="off"
                                required
                            />
                            <textarea
                                placeholder="Message"
                                rows="6"
                                className="w-full bg-gray-100 rounded-md px-4 text-sm pt-3 border-none outline-none"
                                name="message"
                                value={data.message}
                                onChange={inputEvent}
                                autoComplete="off"
                                required
                            />
                            <button
                                type="submit"
                                className="text-white w-full font-bold relative bg-gray-700 hover:bg-gray-600 rounded-md text-sm px-6 py-3 !mt-6"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Submitting..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
