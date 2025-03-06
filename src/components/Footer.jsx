<<<<<<< HEAD
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

// const Footer = () => {
//   useEffect(() => {
//     document.title = "PGO Hostel";
//   }, []);

//   function showCopyright() {
//     alert(
//       "© 2025 PGO Hostel. All rights reserved. Unauthorized use of content is prohibited."
//     );
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       <footer className="bg-gray-800 border-t border-gray-600 text-white py-4 mt-auto text-sm">
//         <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div>
//             <h2 className="text-lg font-bold">Paying Guest Office</h2>
//             <p className="mt-2 text-gray-400">
//               Your comfort, our priority. Stay with us for a better living experience.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-md font-semibold">Quick Links</h3>
//             <ul className="mt-2 space-y-1 text-gray-400">
//               <li><Link to="/" className="hover:text-white">Home</Link></li>
//               <li><Link to="/about" className="hover:text-white">About</Link></li>
//               <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
//               <li><Link to="/header" className="hover:text-white">Header</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-md font-semibold">Contact Us</h3>
//             <p className="mt-2 text-gray-400 flex items-center">
//               <FaMapMarkerAlt className="mr-2" />
//               <Link to="https://www.google.com/maps/search/Zolo+Stays+-+KPHB+Hostels,+KPHB,+Hyderabad/" target="_blank" className="hover:text-white">
//                 View Hostel on Google Maps
//               </Link>
//             </p>
//             <p className="text-gray-400 hover:text-white flex items-center">
//               <FaPhoneAlt className="mr-2" />
//               <Link to="tel:+919876543210">Call Now: +91 98765 43210</Link>
//             </p>
//             <p className="text-gray-400 hover:text-white flex items-center">
//               <FaEnvelope className="mr-2" />
//               <Link to="https://mail.google.com/" target="_blank">Login to Gmail</Link>
//             </p>
//           </div>
//         </div>

//         <div className="mt-4 text-center">
//           <h3 className="text-md font-semibold">Follow Us</h3>
//           <div className="flex justify-center mt-2 space-x-4">
//             <Link to="https://www.facebook.com/login/" className="text-gray-400 hover:text-white">
//               <FaFacebookF />
//             </Link>
//             <Link to="https://x.com/i/flow/login" className="text-gray-400 hover:text-white">
//               <FaXTwitter />
//             </Link>
//             <Link to="https://www.instagram.com/accounts/login/?hl=en" className="text-gray-400 hover:text-white">
//               <FaInstagram />
//             </Link>
//           </div>
//         </div>

//         <div className="mt-4 text-center text-gray-400 text-xs cursor-pointer hover:text-white" onClick={showCopyright}>
//           &copy; 2025 PGO Hostel. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope, // <-- Add this import
} from "react-icons/fa";

=======
import { MdLocationPin } from "react-icons/md";
import { IoMdCall, IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
>>>>>>> 523e1b882dcf51e5c51b50f662712cea59cd890f

import { Link } from "react-router-dom";
const Footer = () => {
  function showCopyright() {
    alert(
      "\u00a9 2025 PGO Hostel. All rights reserved. Unauthorized use of content is prohibited."
    );
  }

  return (
<<<<<<< HEAD
    <div className="flex flex-col min-h-screen">
      <footer className="bg-gray-800 border-t border-gray-600 text-white py-6 mt-auto">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold">Paying Guest Office</h2>
            <p className="mt-2 text-gray-400">
              Your comfort, our priority. Stay with us for a better living experience.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/header" className="hover:text-white">Header</Link></li>
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
                <FaMapMarkerAlt className="inline-block mr-2" /> View Hostel on Google Maps
              </a>
            </p>
            <p className="text-gray-400 hover:text-white">
              <a href="tel:+919876543210">
                <FaPhone className="inline-block mr-2" /> Call Now: +91 98765 43210
              </a>
            </p>
            <p className="text-gray-400 hover:text-white flex items-center">
              <FaEnvelope className="mr-2" />
              <Link to="https://mail.google.com/" target="_blank">Login to Gmail</Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center mt-3 space-x-4">
            <a
              href="https://www.facebook.com/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/i/flow/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/accounts/login/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
=======
    <footer className="bg-gray-800 border-t border-gray-600 text-white py-4 mt-auto px-6 sm:px-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-x-8">
        <div>
          <h2 className="text-xl font-semibold">Paying Guest Office</h2>
          <p className="mt-2 text-gray-400 text-sm">
            Your comfort, our priority. Stay with us for a better living
            experience.
          </p>
        </div>

        <div>
          <h3 className="text-md font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li className="text-sm">
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li className="text-sm">
              <Link to="/contact-us" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li className="text-sm">
              <Link to="/contact-us" className="hover:text-white">
                Refund Policy
              </Link>
            </li>
          </ul>
>>>>>>> 523e1b882dcf51e5c51b50f662712cea59cd890f
        </div>

        <div>
          <h3 className="text-md font-semibold">Contact Us</h3>
          <p className="mt-2 text-gray-400">
            <Link
              to="https://www.google.com/maps/search/Zolo+Stays+-+KPHB+Hostels,+KPHB,+Hyderabad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400  hover:text-white flex items-center gap-x-2 mb-2"
            >
              <MdLocationPin className="text-xl" />
              <span className="text-sm">View Hostel on Google Maps</span>
            </Link>
          </p>

          <Link
            to="tel:+919876543210"
            className="text-gray-400  hover:text-white flex items-center gap-x-2 mb-2"
          >
            <IoMdCall className="text-xl" />
            <span className="text-sm">Call Now: +91 98765 43210</span>
          </Link>

          <Link
            className="text-gray-400  hover:text-white flex items-center gap-x-2 mb-2"
            to="https://mail.google.com/"
            target="_blank"
            rel="noopener
            noreferrer"
          >
            <IoIosMail className="text-xl" />
            <span className="text-sm">Login to Gmail</span>
          </Link>
        </div>
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-md font-semibold">Follow Us</h3>
        <div className="flex justify-center mt-3 space-x-4 gap-x-2">
          <Link
            to="https://www.facebook.com/login/"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebook className="text-xl" />
          </Link>
          <Link
            to="https://x.com/i/flow/login"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <AiFillTwitterCircle className="text-2xl" />
          </Link>
          <Link
            to="https://www.instagram.com/accounts/login/?hl=en"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            <AiFillInstagram className="text-2xl" />
          </Link>
        </div>
      </div>

      <div
        className="mt-4 text-center text-gray-400  cursor-pointer hover:text-white"
        onClick={showCopyright}
      >
        <span className="text-sm">
          &copy; 2025 PGO Hostel. All rights reserved.
<<<<<<< HEAD
        </div>
      </footer>
    </div>
=======
        </span>
      </div>
    </footer>
>>>>>>> 523e1b882dcf51e5c51b50f662712cea59cd890f
  );
};

export default Footer;







// import "@fortawesome/fontawesome-free/css/all.min.css";

// import { useEffect } from "react";

// const Footer = () => {
//   useEffect(() => {
//     document.title = "PGO Hostel";
//   }, []);

//   function showCopyright() {
//     alert(
//       "© 2025 PGO Hostel. All rights reserved. Unauthorized use of content is prohibited."
//     );
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       <footer className="bg-gray-800 border-t border-gray-600 text-white py-6 mt-auto">
//         <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div>
//             <h2 className="text-xl font-bold">Paying Guest Office</h2>
//             <p className="mt-2 text-gray-400">
//               Your comfort, our priority. Stay with us for a better living
//               experience.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold">Quick Links</h3>
//             <ul className="mt-2 space-y-2 text-gray-400">
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white">
//                   Header
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold">Contact Us</h3>
//             <p className="mt-2 text-gray-400">
//               <a
//                 href="https://www.google.com/maps/search/Zolo+Stays+-+KPHB+Hostels,+KPHB,+Hyderabad/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 font-semibold hover:text-white"
//               >
//                 <i className="fas fa-map-marker-alt"></i> View Hostel on Google
//                 Maps
//               </a>
//             </p>
//             <p className="text-gray-400 hover:text-white">
//               <a href="tel:+919876543210">📞 Call Now: +91 98765 43210</a>
//             </p>
//             <p className="text-gray-400 hover:text-white">
//               <a
//                 href="https://mail.google.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="font-semibold"
//               >
//                 📧 Login to Gmail
//               </a>
//             </p>
//           </div>
//         </div>

//         <div className="mt-6 text-center">
//           <h3 className="text-lg font-semibold">Follow Us</h3>
//           <div className="flex justify-center mt-3 space-x-4">
//             <a
//               href="https://www.facebook.com/login/"
//               className="text-gray-400 hover:text-white"
//             >
//               <i className="fab fa-facebook-f"></i>
//             </a>
//             <a
//               href="https://x.com/i/flow/login"
//               className="text-gray-400 hover:text-white"
//             >
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a
//               href="https://www.instagram.com/accounts/login/?hl=en"
//               className="text-gray-400 hover:text-white"
//             >
//               <i className="fab fa-instagram"></i>
//             </a>
//           </div>
//         </div>

//         <div
//           className="mt-4 text-center text-gray-400 text-sm cursor-pointer hover:text-white"
//           onClick={showCopyright}
//         >
//           &copy; 2025 PGO Hostel. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer; decrease fotter size and add link tag only delete anchor mostly and use react icons only delete font awesome and give import modules 
