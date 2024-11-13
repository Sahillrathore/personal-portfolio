import React, { useState, useEffect } from 'react'
import TransitionEffect from '../transitionEff/TransitionEffect';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    
    const [result, setResult] = useState("");
    
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        setResult("Sending....");
        const formData = new FormData(e.target);

        formData.append("access_key", "3201b543-5c29-4336-8cef-6972717e06c3");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            notify()

            e.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    const notify = () => toast("Form Submitted Successfully");

    return (
        <>
            <TransitionEffect />
            <ToastContainer/>
            <div className="contact-section bg-gray-200" id='contact'>
                <div className="hero-elements-container flex flex-col w-full sm:px-16 px-6  py-8 pt-14  overflow-hidden items-center z-30 relative" >
                    <div className="contact-title sm:text-4xl text-2xl text-zinc-800 font-bold text-center mb-10">
                        <h2><span className='text-indigo-600'>Reach</span> Out To Me</h2>
                    </div>

                    <div className="email-banner text-center flex justify-center mb-6">
                        <div className="banner1 flex items-center w-72 text-zinc-800 gap-4 bg-purple-300/40 rounded-lg px-4 py-2">
                            <img src="https://img.freepik.com/free-vector/mail-envelope-with-1-alert_78370-3334.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718323200&semt=sph" alt="email-logo" className='rounded-full h-12' />
                            <span>sahil921031@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact-form lg:w-2/5">
                        <form onSubmit={onSubmit}>

                            <input type="hidden" name="access_key" value="" />

                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full rounded  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-800"

                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full rounded  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-800"

                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-800">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full rounded border   focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out dark:bg-gray-800"
                                    defaultValue={""}
                                />
                            </div>
                            <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Send
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact