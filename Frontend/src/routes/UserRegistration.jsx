import { FaLock, FaUser, FaCity } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex bg-gray-100 items-center justify-center min-h-screen p-4">
      {/* Registration Container */}
      <div className="flex items-center w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1741671317/Mobile_login-bro_mtwnlq.png"
            alt="register"
            className="h-[550px] object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-600 mb-6 text-center">
            Register
          </h2>

          <form className="space-y-3">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700 font-medium" htmlFor="name">
                Name
              </label>
              <div className="flex items-center border rounded-lg py-2 px-4 mt-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                <FaUser className="text-gray-500 mr-3" />
                <input
                  type="text"
                  required
                  id="name"
                  placeholder="Enter your name"
                  className="w-full outline-none bg-transparent text-gray-700"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                className="block text-gray-700 font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <div className="flex items-center border rounded-lg py-2 px-4 mt-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                <MdEmail className="text-gray-500 mr-3" />
                <input
                  type="email"
                  required
                  id="email"
                  placeholder="Enter your email"
                  className="w-full outline-none bg-transparent text-gray-700"
                />
              </div>
            </div>

            {/* Contact Field */}
            <div>
              <label
                className="block text-gray-700 font-medium"
                htmlFor="contact"
              >
                Contact
              </label>
              <div className="flex items-center border rounded-lg py-2 px-4 mt-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                <MdPhone className="text-gray-500 mr-3" />
                <input
                  type="tel"
                  required
                  id="contact"
                  placeholder="Enter your contact number"
                  className="w-full outline-none bg-transparent text-gray-700"
                />
              </div>
            </div>

            {/* City Field */}
            <div>
              <label className="block text-gray-700 font-medium" htmlFor="city">
                City
              </label>
              <div className="flex items-center border rounded-lg py-2 px-4 mt-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                <FaCity className="text-gray-500 mr-3" />
                <input
                  type="text"
                  required
                  id="city"
                  placeholder="Enter your city"
                  className="w-full outline-none bg-transparent text-gray-700"
                />
              </div>
            </div>

            {/* Gender Field */}
            <div>
              <label
                className="block text-gray-700 font-medium"
                htmlFor="gender"
              >
                Gender
              </label>
              <div className="flex items-center border rounded-lg py-2 px-4 mt-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                <select
                  id="gender"
                  required
                  className="w-full outline-none bg-transparent text-gray-700"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                className="block text-gray-700 font-medium"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex items-center border rounded-lg py-2 px-4 mt-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                <FaLock className="text-gray-500 mr-3" />
                <input
                  required
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full outline-none bg-transparent text-gray-700"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <IoEyeOffOutline className="text-xl text-gray-700 cursor-pointer" />
                  ) : (
                    <IoEyeOutline className="text-xl text-gray-700 cursor-pointer" />
                  )}
                </button>
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full flex justify-center bg-gray-500 cursor-pointer text-white font-medium py-2 rounded-lg transition duration-300 shadow-md"
            >
              Register
            </button>
            <p className="text-sm font-semibold text-center md:text-left">
              Already have an account?
              <Link
                className="text-blue-500 text-sm font-semibold ml-1"
                to="/user-login"
              >
                Login here.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
