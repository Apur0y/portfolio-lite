import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div id="contact" className="py-16 ">
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-12 border-b-2 pb-4">
        Contact Me
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-start w-10/12 mx-auto gap-12">
        {/* Left Section: Contact Form */}
        <div className="flex-1 bg- shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <form
            action="https://formsubmit.co/apuroy2785@email.com"
            method="POST"
          >
            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your name"
              />
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
              />
            </div>
            {/* Message Input */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section: Contact Details */}
        <div className="flex-1 bg- shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <ul className="space-y-6">
            {/* Email */}
            <li className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <div>
                <p className="text-lg font-medium">Email</p>
                <p className="text-gray-600">apuroy2785@gmail.com</p>
              </div>
            </li>
            {/* Phone */}
            <li className="flex items-center gap-4">
              <FaPhone className="text-green-500 text-2xl" />
              <div>
                <p className="text-lg font-medium">Phone</p>
                <p className="text-gray-600">01786209895</p>
              </div>
            </li>
            {/* WhatsApp */}
            <li className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500 text-2xl" />
              <div>
                <p className="text-lg font-medium">WhatsApp</p>
                <p className="text-gray-600">01786209895</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
