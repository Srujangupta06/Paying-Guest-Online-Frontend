import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import CustomerFeedBackCard from "../components/CustomerFeedBackCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Home = () => {
  const customerFeedbackSliderSettings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          speed: 1000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          speed: 800,
        },
      },
    ],
  };

  return (
    <main className=" flex flex-col items-center justify-center px-6">
      {/*Hero Section*/}
      <section className="flex flex-col md:min-h-[90vh] md:flex-row items-center justify-between w-full max-w-5xl mb-8">
        {/*Left Side Section */}
        <div className="md:w-1/2 w-full text-left px-2 md:px-4">
          <h1 className="text-3xl font-semibold mb-4">
            Find Your Perfect Stay Hassle-Free Bookings!
          </h1>
          <p className="mb-4 text-gray-600">
            Book monthly or daily stays instantly with our verified hostels.
            Enjoy secure payments and direct communication with property owners.
          </p>
          <div className="flex flex-wrap justify-start gap-3">
            <button className="bg-black text-white text-sm px-5 py-2 border border-black cursor-pointer">
              Find Hostels
            </button>
            <button className="bg-white text-black text-sm px-5 py-2 border border-black cursor-pointer">
              List Hostel
            </button>
          </div>
        </div>
        {/*Right Side Section */}
        <div className="md:w-1/3 w-full mt-6 md:mt-0">
          <img
            src="https://i.pinimg.com/736x/0e/95/4b/0e954b356f560ad83ac1d7f1b41425ec.jpg"
            alt="hero section"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
      {/*Section 2 */}
      <section className="flex flex-col md:min-h-[90vh] mb-8 md:flex-row items-center justify-between w-full max-w-5xl">
        {/*Left Side Section */}
        <div className="md:w-1/3 w-full mt-6 md:mt-0 order-2 md:order-1">
          <img
            src="https://i.pinimg.com/736x/0e/95/4b/0e954b356f560ad83ac1d7f1b41425ec.jpg"
            alt="hero section"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/*Right Side Section */}
        <div className="md:w-1/2 w-full text-left px-2 md:px-4 order-1 md:order-2">
          <h1 className="text-3xl font-semibold mb-4">
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
      <section className="w-full max-w-5xl md:min-h-[60vh] mb-8 ">
        <h1 className="text-2xl font-semibold mb-8  md:text-center">
          Discover the Essential Features for Tenants and Hostel Owners
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
          {/* Tenant Card */}
          <div className="border border-gray-300 bg-white w-full md:w-1/3 rounded-lg  hover:shadow-xl transition duration-300">
            <img
              src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1741085238/Plain_credit_card-pana_png_ik44ey.png"
              alt="Secure Payments"
              className="h-[200px] mx-auto p-4"
            />
            <div className="px-6 py-4 h-[165px]">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Empowering Tenants with Verified Options and Secure Payments
              </h4>
              <Link
                to="/room-listings"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition duration-200"
              >
                <p className="font-medium text-sm">Join</p>
                <IoIosArrowRoundForward className="text-md" />
              </Link>
            </div>
          </div>

          {/* Owner Dashboard Card */}
          <div className="border border-gray-300 bg-white w-full md:w-1/3  rounded-lg  hover:shadow-xl transition duration-300">
            <img
              src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1741086550/dashboard_png_rpp4hw.png"
              alt="Owner Dashboard"
              className="h-[200px] mx-auto p-4"
            />
            <div className="px-6 py-4 h-[165px]">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Boost Bookings with Our Powerful Owner Dashboard
              </h4>
              <Link
                to="/admin-login"
                className="inline-flex  items-center gap-1 text-blue-600 hover:text-blue-800 transition duration-200"
              >
                <p className="font-medium text-sm">Register</p>
                <IoIosArrowRoundForward className="text-md" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*User Feedback */}
      <section className="w-full max-w-5xl md:min-h-[60vh] mb-8">
        <h1 className="text-2xl font-semibold mb-8  md:text-center">
          What Our Customers Say
        </h1>
        {/*Make an API call to get feedback from customers */}
        <div className="w-full overflow-hidden py-8">
          <Slider {...customerFeedbackSliderSettings}>
            <CustomerFeedBackCard id={1} />
            <CustomerFeedBackCard id={2} />
            <CustomerFeedBackCard id={3} />
            <CustomerFeedBackCard id={4} />
            <CustomerFeedBackCard id={5} />
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default Home;
