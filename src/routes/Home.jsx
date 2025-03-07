import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import Faq from "../components/Faq";
import UserFeedBack from "../components/UserFeedBack";
import HomeHero from "../components/HomeHero";
const Home = () => {
  return (
    <main className="">
      {/*Hero Section*/}
      <HomeHero />
      {/*Section 2 */} 
      <section className="flex flex-col sm:min-h-[40vh] md:min-h-[80vh] sm:flex-row items-center justify-between px-6 sm:px-10 md:px-32 w-full mb-6 sm:mb-12  sm:py-0">
        {/*Left Side Section */}
        <div className="sm:w-1/3 w-full mt-6 sm:mt-0 order-2 sm:order-1">
          <img
            src="https://i.pinimg.com/736x/0e/95/4b/0e954b356f560ad83ac1d7f1b41425ec.jpg"
            alt="hero section"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/*Right Side Section */}
        <div className="sm:w-1/2 w-full text-left px-2 sm:px-4 order-1 sm:order-2">
          <h1 className="text-xl md:text-2xl font-semibold mb-4 tracking-wider leading-relaxed">
            Seamless Hostel & PG Bookings, Hassle-Free!
          </h1>
          <ul className="mb-4 text-gray-600">
            <li className="flex items-center gap-x-4 mb-2">
              <FaCheck className="text-gray-600 text-md" />
              <span>Transparent and Secure Transactions</span>
            </li>
            <li className="flex items-center gap-x-4 mb-2">
              <FaCheck className="text-gray-600 text-md" />
              <span>Direct Owner Communication</span>
            </li>
            <li className="flex items-center gap-x-4 mb-2">
              <FaCheck className="text-gray-600 text-md" />
              <span>Flexible Short-Term & Long-Term Stays</span>
            </li>
            <li className="flex items-center gap-x-4 mb-2">
              <FaCheck className="text-gray-600 text-md" />
              <span>Hassle-Free Online Booking</span>
            </li>
          </ul>
        </div>
      </section>
      {/*Section 3 */}
      <section className="justify-between px-6 sm:px-10 md:px-32 w-full flex flex-col items-center md:min-h-[60vh] mb-6 sm:mb-12  sm:py-0">
        <h1 className="text-xl md:text-2xl font-semibold  md:text-center hidden md:block tracking-wider leading-relaxed mb-4">
          Essential Features for Tenants & Hostel Owners
        </h1>
        <h1 className="text-xl md:text-2xl font-semibold mb-4 sm:mb-8 text-center md:hidden">
          Essential Features <br /> for Tenants & Hostel Owners
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 py-4">
          {/* Tenant Card */}
          <div className="relative bg-white/30 border border-gray-200  rounded-2xl shadow-lg p-6 transition transform duration-300 delay-100 hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1741085238/Plain_credit_card-pana_png_ik44ey.png"
                alt="Secure Payments"
                className="h-[150px] mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                Verified Rentals & Secure Payments
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                Find trusted rental listings with seamless payment options.
              </p>
              <Link
                to="/room-listings"
                className="mt-4 inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition duration-200"
              >
                <span className="font-medium text-sm">Join Now</span>
                <IoIosArrowRoundForward className="text-xl" />
              </Link>
            </div>
          </div>

          {/* Owner Dashboard Card */}
          <div className=" duration-300 delay-100 relative bg-white/30 border border-gray-200  rounded-2xl shadow-lg p-6 transition transform hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1741086550/dashboard_png_rpp4hw.png"
                alt="Owner Dashboard"
                className="h-[150px] mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                Boost Bookings with Our Owner Dashboard
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                Manage properties, track bookings, and maximize earnings.
              </p>
              <Link
                to="/admin-login"
                className="mt-4 inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition duration-200"
              >
                <span className="font-medium text-sm">Get Started</span>
                <IoIosArrowRoundForward className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*User Feedback for using PGO Platform*/}
      <UserFeedBack />
      {/*Frequently Asked Questions */}
      <Faq />
    </main>
  );
};

export default Home;
