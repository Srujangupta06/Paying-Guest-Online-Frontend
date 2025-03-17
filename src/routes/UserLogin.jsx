import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
const UserLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
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
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div className="flex bg-gray-100 items-center justify-center min-h-screen p-4">
    //   {/* Login Container */}
    //   <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
    //     {/* Left Side - Image */}
    //     <div className="hidden md:block w-1/2">
    //       <img
    //         src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1741671317/Mobile_login-bro_mtwnlq.png"
    //         alt="login"
    //         className="w-full h-full object-cover"
    //         loading="lazy"
    //       />
    //     </div>

    //     {/* Right Side - Form */}
    //     <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
    //       <h2 className="text-2xl font-semibold text-gray-600 mb-6 text-center">
    //         Login
    //       </h2>

    //       <form className="space-y-6">
    //         {/* Username Field */}
    //         <div>
    //           <label
    //             className="block text-gray-700 font-medium"
    //             htmlFor="email"
    //           >
    //             Email
    //           </label>
    //           <div className="flex items-center border rounded-lg py-2 px-4 mt-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
    //             <MdEmail className="text-gray-500 mr-3" />
    //             <input
    //               type="email"
    //               required
    //               id="email"
    //               placeholder="Enter your Email"
    //               className="w-full outline-none bg-transparent text-gray-700"
    //             />
    //           </div>
    //         </div>

    //         {/* Password Field */}
    //         <div>
    //           <label
    //             className="block text-gray-700 font-medium"
    //             htmlFor="password"
    //           >
    //             Password
    //           </label>
    //           <div className="flex items-center border rounded-lg py-2 px-4 mt-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
    //             <FaLock className="text-gray-500 mr-3" />
    //             <input
    //               required
    //               id="password"
    //               type={"password"}
    //               placeholder="Enter your password"
    //               className="w-full outline-none bg-transparent text-gray-700"
    //             />

    //             <IoEyeOffOutline className="text-xl text-gray-700 cursor-pointer" />
    //           </div>
    //         </div>

    //         {/* Login Button */}
    //         <button
    //           type="submit"
    //           className="w-full flex justify-center bg-gray-500  cursor-pointer text-white font-medium py-2 rounded-lg transition duration-300 shadow-md"
    //         >
    //           Login
    //         </button>
    //         <div className="flex items-center justify-between">
    //           <p className="text-sm">
    //             Don't have an account ? 
    //              <Link
    //               className="text-blue-500 text-xs font-semibold"
    //               to="/user-registration"
    //             >
    //                Register here.
    //             </Link>
    //           </p>
    //           <Link className="text-blue-500 text-xs font-semibold" to="/">
    //             Forgot Password
    //           </Link>
    //         </div>
    //         {/* Extra Links */}
    //       </form>
    //     </div>
    //   </div>
    // </div>
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

<<<<<<< HEAD
          <form className="space-y-6" onSubmit={onHandleFormSubmit}>
            {/* Username Field */}
=======
          <form className="space-y-5">
            {/* Email Field */}
>>>>>>> 1bd953c0d7ecad7cc3c77663a3eebecde1c1d16a
            <div>
              <label className="block text-gray-700 font-medium" htmlFor="email">
                Email
              </label>
              <div className="flex items-center border rounded-lg py-2 px-4 mt-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                <MdEmail className="text-gray-500 mr-3" />
                <input
                  type="email"
                  required
                  id="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Enter your Email"
                  className="w-full outline-none bg-transparent text-gray-700"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-700 font-medium" htmlFor="password">
                Password
              </label>
              <div className="flex items-center border rounded-lg py-2 px-4 mt-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
                <FaLock className="text-gray-500 mr-3" />
                <input
                  required
                  id="password"
<<<<<<< HEAD
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
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
=======
                  type="password"
                  placeholder="Enter your password"
                  className="w-full outline-none bg-transparent text-gray-700"
                />
                <IoEyeOffOutline className="text-xl text-gray-700 cursor-pointer" />
>>>>>>> 1bd953c0d7ecad7cc3c77663a3eebecde1c1d16a
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition duration-300 shadow-md"
            >
              Login
            </button>
<<<<<<< HEAD
            <div className="flex items-center justify-between">
              <p className="text-sm">
                Don't have an account ?
                <Link
                  className="text-blue-500 text-xs font-semibold"
                  to="/user-registration"
                >
=======

            {/* Extra Links */}
            <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-center">
              <p className="mb-2 sm:mb-0">
                Don't have an account?{" "}
                <Link className="text-blue-500 font-semibold" to="/user-registration">
>>>>>>> 1bd953c0d7ecad7cc3c77663a3eebecde1c1d16a
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
