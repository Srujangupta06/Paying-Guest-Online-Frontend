import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  useEffect(() => {
    document.title = "PGO Hostel";
  }, []);

  function showCopyright() {
    alert(
      "© 2025 PGO Hostel. All rights reserved. Unauthorized use of content is prohibited."
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <footer className="bg-gray-800 border-t border-gray-600 text-white py-4 mt-auto text-sm">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-lg font-bold">Paying Guest Office</h2>
            <p className="mt-2 text-gray-400">
              Your comfort, our priority. Stay with us for a better living experience.
            </p>
          </div>

          <div>
            <h3 className="text-md font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-1 text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/header" className="hover:text-white">Header</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold">Contact Us</h3>
            <p className="mt-2 text-gray-400 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <Link to="https://www.google.com/maps/search/Zolo+Stays+-+KPHB+Hostels,+KPHB,+Hyderabad/" target="_blank" className="hover:text-white">
                View Hostel on Google Maps
              </Link>
            </p>
            <p className="text-gray-400 hover:text-white flex items-center">
              <FaPhoneAlt className="mr-2" />
              <Link to="tel:+919876543210">Call Now: +91 98765 43210</Link>
            </p>
            <p className="text-gray-400 hover:text-white flex items-center">
              <FaEnvelope className="mr-2" />
              <Link to="https://mail.google.com/" target="_blank">Login to Gmail</Link>
            </p>
          </div>
        </div>

        <div className="mt-4 text-center">
          <h3 className="text-md font-semibold">Follow Us</h3>
          <div className="flex justify-center mt-2 space-x-4">
            <Link to="https://www.facebook.com/login/" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </Link>
            <Link to="https://x.com/i/flow/login" className="text-gray-400 hover:text-white">
              <FaXTwitter />
            </Link>
            <Link to="https://www.instagram.com/accounts/login/?hl=en" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </Link>
          </div>
        </div>

        <div className="mt-4 text-center text-gray-400 text-xs cursor-pointer hover:text-white" onClick={showCopyright}>
          &copy; 2025 PGO Hostel. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
