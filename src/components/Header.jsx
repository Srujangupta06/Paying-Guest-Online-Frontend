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
        HostelFinder
      </Link>

      {/* Desktop Navigation (Visible on Large Screens) */}
      <nav className="hidden lg:flex gap-x-10 items-center">
        <Link to="/" className="text-gray-800 text-sm tracking-widest hover:text-gray-500 transition duration-300">
          Home
        </Link>
        <Link to="/about" className="text-gray-800 text-sm tracking-widest hover:text-gray-500 transition duration-300">
          About
        </Link>
        <Link to="/contact-us" className="text-gray-800 text-sm tracking-widest hover:text-gray-500 transition duration-300">
          Find Hostels
        </Link>
      </nav>

      {/* Desktop Buttons (Login & Signup) */}
      <div className="hidden lg:flex flex-row items-center gap-x-4 md:gap-x-6">
        <button
          onClick={toggleLoginModal}
          className="text-sm tracking-widest text-gray-800 border border-gray-800 rounded-sm px-4 md:px-6 py-1 transition duration-300 hover:bg-gray-100"
        >
          Login
        </button>
        <button
          onClick={toggleSignupModal}
          className="text-sm tracking-widest bg-gray-600 text-white rounded-sm px-4 md:px-6 py-1 border border-gray-600 transition duration-300 hover:bg-gray-700"
        >
          Signup
        </button>
      </div>

      {/* Mobile Menu Button (Visible on Small & Medium Screens) */}
      <div className="lg:hidden">
        <button id="menu-toggle" className="focus:outline-none" onClick={toggleMobileMenu}>
          <svg className="w-8 h-8 text-gray-800 hover:text-gray-500 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Hidden by Default) */}
      <div id="mobile-menu" className="hidden lg:hidden absolute top-16 left-0 w-full bg-white shadow-md sm:px-10 md:px-32 ">
        <nav className="flex flex-col items-center py-4 space-y-4">
          <Link to="/" className="text-gray-800 text-sm tracking-widest hover:text-gray-500 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 text-sm tracking-widest hover:text-gray-500 transition duration-300">
            About
          </Link>
          <Link to="/contact-us" className="text-gray-800 text-sm tracking-widest hover:text-gray-500 transition duration-300">
            Find Hostels
          </Link>
          <button
            onClick={toggleLoginModal}
            className="w-40 text-sm tracking-widest text-gray-800 border border-gray-800 rounded-sm px-4 py-1 transition duration-300 hover:bg-gray-100"
          >
            Login
          </button>
          <button
            onClick={toggleSignupModal}
            className="w-40 text-sm tracking-widest bg-gray-600 text-white rounded-sm px-4 py-1 border border-gray-600 transition duration-300 hover:bg-gray-700"
          >
            Signup
          </button>
        </nav>
      </div>
    </header>
  );
}
