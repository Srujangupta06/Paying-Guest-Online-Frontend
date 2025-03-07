import { useNavigate } from "react-router-dom";

const HomeHero = () => {
  const navigate = useNavigate();
  return (
    <section className="px-6 w-full mb-6 sm:mb-12 sm:py-0 bg-image flex flex-col items-center justify-center min-h-screen">
      <div className="px-2 sm:px-4 flex flex-col text-center items-center">
        <h1 className="text-xl text-white md:text-3xl font-semibold mb-4 tracking-wider leading-relaxed">
          Find Your Perfect Stay Hassle-Free Bookings!
        </h1>
        <p className=" text-white mb-6 w-3/4">
          Book monthly or daily stays instantly with our verified hostels. Enjoy
          secure payments and direct communication with property owners.
        </p>
        <div className="text-center">
          <button
            className="bg-white text-black text-sm px-5 py-2 border border-white cursor-pointer mr-4"
            onClick={() => navigate("/list-hostels")}
          >
            Find Hostels
          </button>
          <button
            className="bg-transparent text-white text-sm px-5 py-2 border border-white  cursor-pointer"
            onClick={() => navigate("/admin-login")}
          >
            List Hostel
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
