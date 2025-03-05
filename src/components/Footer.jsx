import "@fortawesome/fontawesome-free/css/all.min.css";
const Footer = () => {
  

  function showCopyright() {
    alert(
      "© 2025 PGO Hostel. All rights reserved. Unauthorized use of content is prohibited."
    );
  }

  return (
    
      <footer className="bg-gray-800 border-t border-gray-600 text-white py-6 mt-auto">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold">Paying Guest Office</h2>
            <p className="mt-2 text-gray-400">
              Your comfort, our priority. Stay with us for a better living
              experience.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Header
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2 text-gray-400">
              <a
                href="https://www.google.com/maps/search/Zolo+Stays+-+KPHB+Hostels,+KPHB,+Hyderabad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 font-semibold hover:text-white"
              >
                <i className="fas fa-map-marker-alt"></i> View Hostel on Google
                Maps
              </a>
            </p>
            <p className="text-gray-400 hover:text-white">
              <a href="tel:+919876543210">📞 Call Now: +91 98765 43210</a>
            </p>
            <p className="text-gray-400 hover:text-white">
              <a
                href="https://mail.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                📧 Login to Gmail
              </a>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center mt-3 space-x-4">
            <a
              href="https://www.facebook.com/login/"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://x.com/i/flow/login"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/accounts/login/?hl=en"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div
          className="mt-4 text-center text-gray-400 text-sm cursor-pointer hover:text-white"
          onClick={showCopyright}
        >
          &copy; 2025 PGO Hostel. All rights reserved.
        </div>
      </footer>
   
  );
};

export default Footer;
