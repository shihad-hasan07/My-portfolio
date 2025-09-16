import React from 'react';

const Contact = () => {
    return (
        <div id='contact'>

            <section
                id="projects"
                className="relative bg-[#1e0e31] text-white py-28 px-6 lg:px-20"
            >
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">Let's work together</h2>
                        <p className="text-gray-300">Connect with me</p>
                    </div>

                    {/* Grid layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Left: Form */}
                        <form className="bg-[#13082d] p-8 rounded-2xl shadow-xl space-y-6">
                            {/* Row 1 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Full name *"
                                    className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:border-indigo-500 focus:outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email *"
                                    className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:border-indigo-500 focus:outline-none"
                                />
                            </div>

                            {/* Row 2 */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:border-indigo-500 focus:outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Company"
                                    className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:border-indigo-500 focus:outline-none"
                                />
                            </div>

                            {/* Message */}
                            <textarea
                                rows="4"
                                placeholder="How can we help you?"
                                className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 focus:border-indigo-500 focus:outline-none"
                            ></textarea>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition-all"
                            >
                                Send Request →
                            </button>

                            {/* Note */}
                            <p className="text-xs text-gray-400">
                                By clicking “Send Request”, You agree to Intelceed’s
                                <span className="text-indigo-400 cursor-pointer"> Privacy Policy</span>.
                            </p>
                        </form>

                        {/* Right: Contact Info */}
                        <div className="space-y-10">
                            {/* Write to us */}
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600">
                                    ✉️
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Write to us</h3>
                                    <p className="text-gray-300">shihadhasan607255@gmail.com</p>
                                </div>
                            </div>

                            {/* Offices */}
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600">
                                    📍
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Our location</h3>
                                    <p className="text-gray-300">Dhaka, Bangladesh</p>
                                </div>
                            </div>

                            {/* Call us */}
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600">
                                    📞
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Call us</h3>
                                    <p className="text-gray-300">+8801763095394</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;