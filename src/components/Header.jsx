import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [signupFormData, setSignupFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [loginFormData, setLoginFormData] = useState({
    usernameOrEmailOrPhone: "",
    password: "",
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const resetSignupForm = () => {
    setSignupFormData({
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  const resetLoginForm = () => {
    setLoginFormData({
      usernameOrEmailOrPhone: "",
      password: "",
    });
  };

  const toggleSignupModal = () => {
    setIsSignupModalOpen(!isSignupModalOpen);
    if (!isSignupModalOpen) resetSignupForm();
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
    if (!isLoginModalOpen) resetLoginForm();
  };

  const handleSignupInputChange = (e) => {
    const { name, value } = e.target;
    setSignupFormData({
      ...signupFormData,
      [name]: value,
    });
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupFormData.password !== signupFormData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup Form Data:", signupFormData);
    alert("Account created successfully!");
    toggleSignupModal();
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login Form Data:", loginFormData);
    alert("Logged in successfully!");
    toggleLoginModal();
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg fixed w-full top-0 z-2 px-6 sm:px-32">
      <div className="container  flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/dit5wff6e/image/upload/v1741112028/pgo-logo-pgo-letter-pgo-letter-logo-design-initials-pgo-logo-linked-with-circle-and-uppercase-monogram-logo-pgo-typography-for-technology-busines-2RCXW4Y_oqe5ld.jpg"
            alt="PG Logo"
            className="h-12 w-12 rounded-full border-2 border-white shadow-md"
          />
          <span className="text-xl font-semibold font-sans hover:text-blue-200 transition duration-300">
            PG Online
          </span>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-sm tracking-widest hover:text-blue-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm tracking-widest  hover:text-blue-200 transition duration-300"
          >
            About
          </Link>
          <Link
            to='/contact-us'
            className="text-sm tracking-widest  hover:text-blue-200 transition duration-300"
          >
            Contact Us
          </Link>
          <button
            onClick={toggleLoginModal}
            className="text-sm tracking-widest   hover:text-blue-200 transition duration-300"
          >
            Login
          </button>
          <button
            onClick={toggleSignupModal}
            className="bg-white text-blue-600 px-6 py-2 rounded-full text-sm tracking-widest  hover:bg-blue-100 hover:text-purple-600 transition duration-300 shadow-lg"
          >
            Signup
          </button>
        </nav>
        <div className="md:hidden">
          <button
            id="menu-toggle"
            className="focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-8 h-8 hover:text-blue-200 transition duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`md:hidden bg-gradient-to-r from-blue-600 to-purple-600 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4 p-4">
          <Link
            to='/'
            className="tracking-widest text-sm hover:text-blue-200 transition duration-300"
          >
            Home
          </Link>
          <Link
            to='/about'
            className="tracking-widest text-sm  hover:text-blue-200 transition duration-300"
          >
            About
          </Link>
          <Link
            to='/contact-us'
            className="tracking-widest text-sm  hover:text-blue-200 transition duration-300"
          >
            Contact Us
          </Link>
          <button
            onClick={toggleLoginModal}
            className="tracking-widest text-sm hover:text-blue-200 transition duration-300"
          >
            Login
          </button>
          <button
            onClick={toggleSignupModal}
            className="tracking-widest text-sm bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 hover:text-purple-600 transition duration-300 shadow-lg text-center"
          >
            Signup
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
