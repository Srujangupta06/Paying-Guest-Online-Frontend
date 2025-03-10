import { MdLocationPin } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { amentiesList, roomTypesList } from "../utils/utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SpecificHostel = () => {
  const hostelRoomSliderSettings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    pauseOnHover: true,
  };
  const onHandleChatNow = () => {
    const mobileNumber = "9381138831";
    const prefilledMessage =
      "Hi, I am interested in your PG. Please provide more details.";
    const whatsappUrl = `https://wa.me/${mobileNumber}?text=${encodeURIComponent(
      prefilledMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <main className="px-6 sm:px-10 md:px-32 py-8 min-h-screen bg-gray-100">
      <section className="bg-white rounded-md px-4 py-8 mb-8">
        {/*Left Side Section */}
        <div className="flex flex-col md:flex-row justify-between gap-y-8">
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="font-semibold text-2xl mb-2">
                NINETHA NEST PG FOR WOMEN'S
              </h1>
              <div className="flex items-center gap-x-0.5 mb-6">
                <MdLocationPin className="text-red-700" />
                <p className="text-gray-600 italic text-sm">Location</p>
              </div>
              <div className="flex items-center gap-x-1 mb-3">
                <FaStar className="text-yellow-400" />
                <p className="text-gray-600 font-semibold text-md">
                  4.3 ratings
                </p>
              </div>
              <div className="flex items-center gap-x-1 mb-3">
                🤵
                <p className="font-semibold text-gray-800 text-sm">
                  Owner Name
                </p>
              </div>
              <div className="flex items-center gap-x-1 mb-3">
                <FaPhoneAlt className="text-sm text-blue-400" />
                <p className="font-semibold text-gray-800 text-sm">
                  +91xxxxxxxxxx
                </p>
              </div>
              <div className="flex items-center gap-x-1 mb-3">
                🙍‍♀️
                <p className="font-semibold text-red-600 text-md">
                  Only for Women
                </p>
              </div>
            </div>
            <button
              className="self-start bg-gray-800 text-white px-5 py-1.5  border border-gray-800 cursor-pointer rounded-sm flex items-center gap-x-2 text-sm"
              onClick={onHandleChatNow}
            >
              <IoLogoWhatsapp />
              Chat now
            </button>
          </div>
          {/*Right Side Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://d2bxpw04qb5rhq.cloudfront.net/production/property_image/image/146775/8766f2fa21940512d660938945332bc42b626ea696bd496ec5af6e8ee32ada5203ab9d5ae7523f43/IMG_20230903_214056.jpg"
              alt="hostel main image"
              className="w-full h-auto rounded-sm shadow-lg"
            />
          </div>
        </div>
        <hr className="my-6 border-t-1 border-gray-200" />
        <h3 className="font-semibold text-sm mb-4">Amenties</h3>
        <ul className="px-0 flex flex-wrap gap-y-4">
          {amentiesList.map((eachAmenty) => (
            <li
              className="flex items-center text-md font-semibold w-1/2"
              key={eachAmenty.id}
            >
              <p>{eachAmenty.amentiesType}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-white rounded-md px-4 py-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-xl">Available Rooms</h3>
          <div className="flex items-center gap-x-6">
            <button className="text-sm py-1 border border-gray-300 rounded-full w-12 px-4 flex justify-center cursor-pointer">
              AC
            </button>
            <button className="text-sm py-1 border border-gray-300 rounded-full px-4 flex justify-center cursor-pointer">
              Available
            </button>
            <select className="border border-gray-300 outline-none px-2 py-1 rounded-md text-gray-700 ">
              <option className="text-gray-600">1 Sharing</option>
              <option className="text-gray-600">2 Sharing</option>
              <option className="text-gray-600">3 Sharing</option>
              <option className="text-gray-600">4 or more Sharing</option>
            </select>
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {roomTypesList.map((eachRoomInfo) => (
            <li key={eachRoomInfo.id} className="rounded-md shadow-md p-4">
              <Slider {...hostelRoomSliderSettings}>
                {eachRoomInfo.imageUrlList.map((eachImage, index) => (
                  <img
                    src={eachImage}
                    key={index}
                    className="w-full h-50 object-cover"
                  />
                ))}
              </Slider>

              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-semibold text-sm mb-2 ${
                      eachRoomInfo.roomStatus === "Available"
                        ? "text-green-500"
                        : "text-red-700"
                    }`}
                  >
                    {eachRoomInfo.roomStatus}
                  </h3>
                  <h3 className="font-semibold text-lg">
                    ₹{eachRoomInfo.pricePerMonth}/-
                  </h3>
                </div>
                <p className="text-gray-600 mb-2">{eachRoomInfo.roomType}</p>
                <button
                  disabled={eachRoomInfo.roomStatus !== "Available"}
                  className={`text-xs px-4 py-1.5 rounded-sm ${
                    eachRoomInfo.roomStatus === "Available"
                      ? "bg-black text-white cursor-pointer"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  Book Now
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-white rounded-md px-4 py-8 mb-8 flex flex-col md:flex-row md:justify-between gap-y-6">
        <div className="w-full md:w-1/3">
          <h3 className="font-semibold text-xl mb-4">Find Us Here</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d700.9248930140526!2d78.39526994633104!3d17.48676834742196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918df14cb897%3A0x3e5fe4685cd52175!2sKphb%20Temple%20Busstop!5e1!3m2!1sen!2sin!4v1741596668424!5m2!1sen!2sin"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2"> 
        <h3 className="font-semibold text-xl mb-4">Write a Review</h3>
          <button className="bg-gray-600 text-white px-4 py-1.5 rounded-sm text-sm cursor-pointer">Review</button>
        </div>
      </section>
    </main>
  );
};

export default SpecificHostel;
