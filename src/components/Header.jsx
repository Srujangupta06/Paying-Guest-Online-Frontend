import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  // Functions for toggling modals
  const toggleLoginModal = () => {
    navigate("/user-login");
  };

  const toggleSignupModal = () => {
    console.log("Signup modal opened");
  };

  const toggleMobileMenu = () => {
    const menu = document.getElementById("mobile-menu");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sm:px-10 md:px-32 ">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-gray-800">
        <div className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/dit5wff6e/image/upload/v1741112028/pgo-logo-pgo-letter-pgo-letter-logo-design-initials-pgo-logo-linked-with-circle-and-uppercase-monogram-logo-pgo-typography-for-technology-busines-2RCXW4Y_oqe5ld.jpg"
            alt="PG Logo"
            className="h-12 w-12 rounded-full border-2 border-white shadow-md"
          />
          <span className="text-xl font-semibold font-sans text-gray-700">
            PG Online
          </span>
        </div>
      </Link>

      {/* Desktop Navigation (Visible on Large Screens) */}
      <nav className="hidden lg:flex gap-x-10 items-center">
        <Link
          to="/"
          className="text-gray-800 text-sm tracking-widest hover:text-gray-500 transition duration-300"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-gray-800 text-sm tracking-widest hover:text-gray-500 transition duration-300"
        >
          About
        </Link>
        <Link
          to="/hostel-listings"
          className="text-gray-800 text-sm tracking-widest hover:text-gray-500 transition duration-300"
        >
          Check Hostels
        </Link>
      </nav>

      {/* Desktop Buttons (Login & Signup) */}
      <div className="hidden lg:flex flex-row items-center gap-x-4 md:gap-x-6">
        <button
          onClick={toggleLoginModal}
          className="cursor-pointer text-xs tracking-widest text-gray-800 border border-gray-800 rounded-sm px-4 md:px-6 py-2 transition duration-300 hover:bg-gray-100"
        >
          Login
        </button>
        <button className="cursor-pointer text-xs tracking-widest bg-gray-600 text-white rounded-sm px-4 md:px-6 py-2 border border-gray-600 transition duration-300 hover:bg-gray-700">
          Add Listing
        </button>
      </div>

      {/* Mobile Menu Button (Visible on Small & Medium Screens) */}
      <div className="lg:hidden">
        <button
          id="menu-toggle"
          className="focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-8 h-8 text-gray-800 hover:text-gray-500 transition duration-300"
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

      {/* Mobile Menu (Hidden by Default) */}
      <div
        id="mobile-menu"
        className="hidden lg:hidden absolute top-16 left-0 w-full bg-white shadow-md sm:px-10 md:px-32 "
      >
        <nav className="flex flex-col items-center text-center px-6 py-4 gap-4 sm:flex-row sm:justify-center sm:space-x-6">
          <Link
            to="/"
            className="text-gray-800 text-sm tracking-widest hover:text-gray-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 text-sm tracking-widest hover:text-gray-500 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/hostel-listings"
            className="text-gray-800 text-sm tracking-widest hover:text-gray-500 transition duration-300"
          >
            Check Hostels
          </Link>
          <button
            onClick={toggleLoginModal}
            className="w-full sm:w-40 cursor-pointer text-xs tracking-widest text-gray-800 border border-gray-800 rounded-sm px-4 py-1 transition duration-300 hover:bg-gray-100"
          >
            Login
          </button>
          <button className="w-full sm:w-40 cursor-pointer text-xs tracking-widest bg-gray-600 text-white rounded-sm px-4 md:px-6 py-2 border border-gray-600 transition duration-300 hover:bg-gray-700">
            Add Listing
          </button>
        </nav>
      </div>
    </header>
  );
}
