import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required!");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); // Clear error message
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // Clear form
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 bg-gray-100 min-h-[80vh] flex flex-col justify-center py-12">
      <div className="flex flex-col-reverse md:flex-row justify-around items-center gap-8">
        {/* Left side: Contact Form */}
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-semibold text-center">Get In Touch</h1>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="Enter your message"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full text-sm font-semibold tracking-widest bg-gray-600 text-white rounded-md px-4 py-2 border border-gray-600 transition duration-300 hover:bg-gray-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right side: Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1741198791/Contact_us-amico_gkl93k.png"
            alt="Contact Us"
            className="w-60 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
