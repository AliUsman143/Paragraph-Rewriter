'use client';
import { useState } from "react";
import axios from "axios";
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";
import Swal from "sweetalert2";  // Import SweetAlert2

const Contact = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state

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
        setIsSubmitting(true);  // Disable the button and show loading

        // Check if form is valid
        if (!validateForm()) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'All fields are required!',
            });
            setIsSubmitting(false);  // Re-enable button
            return;
        }

        try {
            // Sending the data to the API
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/contactus`, data);

            if (response.status === 200) {
                // Success case
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your message has been successfully sent!',
                });
            }
        } catch (error) {
            // Error handling
            if (error.response) {
                // If response exists but status code is not 2xx
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.response.data.message || 'Something went wrong. Please try again later.',
                });
            } else if (error.request) {
                // If no response was received
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No response from the server. Please check your connection.',
                });
            } else {
                // If the request setup fails
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Something went wrong with the request.',
                });
            }
        } finally {
            setIsSubmitting(false); // Re-enable button after submission
        }

        // Clear form data after submission
        setData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <>
            {/* <Navbar /> */}
            <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden mt-36 mb-24">
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-gray-700"></div>
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gray-700"></div>

                <div className="grid md:grid-cols-2 gap-8 py-8 px-6">
                    <div className="flex flex-col">
                        <div className="mt-10">
                            <h1 className="text-4xl font-bold">Get in Touch</h1>
                            <p className="text-md mt-5 text-justify">
                                Have questions or feedback? We are here to help! Our dedicated support team is just a click away, ready to assist you on your learning journey. Whether you need technical assistance, guidance on course selection, or simply want to share your thoughts, we value your input and are committed to providing a seamless experience. Reach out to us today and lets embark on this educational adventure together!
                            </p>
                            
                            <p className="mt-5">
                                <i className="fa-solid fa-envelope"></i><span className="ml-5">hi.paragraphrewriter.io@gmail.com</span>
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
                            />
                            <textarea
                                placeholder="Message"
                                rows="6"
                                className="w-full bg-gray-100 rounded-md px-4 text-sm pt-3 border-none outline-none"
                                name="message"
                                value={data.message}
                                onChange={inputEvent}
                                autoComplete="off"
                            />
                            <button
                                type="submit"
                                className="text-white w-full font-bold relative bg-gray-700 hover:bg-gray-600 rounded-md text-sm px-6 py-3 !mt-6"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span>Submitting...</span>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" className="mr-2 inline" viewBox="0 0 548.244 548.244">
                                            <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" data-original="#000000" />
                                        </svg>
                                        Send Message
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Contact;
