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
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100 p-6 gap-8">
      {/* Left side: Image */}
      <div className="md:w-1/2 w-full h-full flex justify-center">
        <img
          src="https://cdn.dribbble.com/userupload/12821765/file/original-bcb0bb2a26e1af8d4fac4fc7225a94d0.png?resize=1504x1128&vertical=center" // Change this path to your actual image
          alt="Contact Us"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right side: Contact Form */}
      <div className="md:w-1/2 w-full h-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center">Contact Us</h1>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="font-medium">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-2 border-gray-300 p-2 rounded-lg"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-2 border-gray-300 p-2 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-2 border-gray-300 p-2 rounded-lg"
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg mt-4 hover:bg-green-600"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
