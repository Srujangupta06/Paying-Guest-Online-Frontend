import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const onHandleFormSubmit = (e) => {
    e.preventDefault();
    getUserLogin();
    setUserEmail("");
    setUserPassword("");
  };

  const getUserLogin = async () => {
    try {
      const apiUrl = "http://localhost:5000/api/user/login";
      const userCredentials = {
        email: userEmail,
        password: userPassword,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      };
      const response = await fetch(apiUrl, options);

      if (response.ok) {
        const data = await response.json();
        const token = data.jwt_token;
        Cookies.set("jwtToken", token, { expires: 7 });
        toast.success("Login Successful", {
          pauseOnHover: false,
          autoClose: 3000,
          position: "bottom-center",
        });
        navigate("/");
      } else {
        const data = await response.json();
        const { message } = data;
        setErrorMessage(message);
        toast.error(message, {
          pauseOnHover: false,
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error, {
        pauseOnHover: false,
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="flex bg-gray-100 items-center justify-center min-h-screen p-4">
      {/* Login Container */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side - Image (Hidden on Small Screens) */}
        <div className="hidden md:flex md:w-1/2">
          <img
            src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1741671317/Mobile_login-bro_mtwnlq.png"
            alt="login"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-600 mb-6 text-center">
            Login
          </h2>

          <form className="space-y-6" onSubmit={onHandleFormSubmit}>
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
                  value={userEmail}
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                    setErrorMessage("");
                  }}
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
                  value={userPassword}
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                    setErrorMessage("");
                  }}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full outline-none bg-transparent text-gray-700"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? (
                    <IoEyeOffOutline className="text-xl text-gray-700 cursor-pointer" />
                  ) : (
                    <IoEyeOutline className="text-xl text-gray-700 cursor-pointer" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition duration-300 shadow-md"
            >
              Login
            </button>
            {errorMessage && (
              <p className="text-red-600 text-sm">{errorMessage}</p>
            )}
            <div className="flex items-center justify-between">
              <p className="text-sm">
                Don't have an account ?
                <Link
                  className="text-blue-500 text-xs font-semibold"
                  to="/user-registration"
                >
                  Register here.
                </Link>
              </p>
              <Link className="text-blue-500 font-semibold" to="/">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
