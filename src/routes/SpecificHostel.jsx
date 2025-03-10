import { useParams } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { amentiesList, roomTypesList } from "../utils/utils";
import { createElement } from "react";
const SpecificHostel = () => {
  const { id } = useParams();
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
        <div className="flex flex-col md:flex-row justify-between">
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
      <section className="bg-white rounded-md  px-4 py-8 mb-8">
        <h3 className="font-semibold text-xl mb-4">Available Rooms</h3>
        <ul className="grid grid-cols-3 gap-4">
          {roomTypesList.map((eachRoomInfo) => (
            <li key={eachRoomInfo.id} className="rounded-md shadow-md p-4">
              <img
                src={eachRoomInfo.imageUrlList[1]}
                alt={eachRoomInfo.roomType}
                className="w-full h-40 object-cover rounded-md"
              />
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
                  <h3 className="font-semibold text-lg">₹{eachRoomInfo.pricePerMonth}/-</h3>
                </div>
                <p className="text-gray-600 mb-2">{eachRoomInfo.roomType}</p>
                <button
                  disabled={eachRoomInfo.roomStatus !== "Available"}
                  className={`text-xs px-4 py-1 rounded-sm ${
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
    </main>
  );
};

export default SpecificHostel;
