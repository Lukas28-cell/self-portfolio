// src/components/Contact.js
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server or email service
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        {isSubmitted ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Thank You!</h3>
            <p>Your message has been sent. I will get back to you soon!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border border-gray-300 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white py-3 rounded hover:bg-accent-dark transition bg-black"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-semibold mb-4">Other Ways to Reach Me</h3>
          <p>Email: <a href="lukakoinaede@gmail.com" className="text-accent hover:underline">lukakoinaede@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/Lukas A" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://www.linkedin.com/in/Lukas A</a></p>
          <p>GitHub: <a href="https://github.com/Lukas28-cell" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://github.com/Lukas28-cell</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;