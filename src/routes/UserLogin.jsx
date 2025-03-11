import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const UserLogin = () => {
  return (
    <div className="flex bg-gray-100 items-center justify-center min-h-screen p-4">
      {/* Login Container */}
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1741671317/Mobile_login-bro_mtwnlq.png"
            alt="login"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-600 mb-6 text-center">
            Login
          </h2>

          <form className="space-y-6">
            {/* Username Field */}
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
                  placeholder="Enter your Email"
                  className="w-full outline-none bg-transparent text-gray-700"
                />
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
                  type={"password"}
                  placeholder="Enter your password"
                  className="w-full outline-none bg-transparent text-gray-700"
                />

                <IoEyeOffOutline className="text-xl text-gray-700 cursor-pointer" />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full flex justify-center bg-gray-500  cursor-pointer text-white font-medium py-2 rounded-lg transition duration-300 shadow-md"
            >
              Login
            </button>
            <div className="flex items-center justify-between">
              <Link
                className="text-blue-500 text-xs font-semibold"
                to="/user-registration"
              >
                Register Account
              </Link>
              <Link
                className="text-blue-500 text-xs font-semibold"
                to="/"
              >
                Forgot Password
              </Link>
            </div>
            {/* Extra Links */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
