import { useNavigate } from "react-router-dom"; // Removed `replace`

const HomeHero = () => {
  const navigate = useNavigate();
  return (
    <section className="px-6 w-full mb-6 sm:mb-12 sm:py-0 bg-image flex flex-col items-center justify-center min-h-screen">
      <div className="px-2 sm:px-4 flex flex-col text-center items-center">
        <h1 className="text-xl font-bold text-white md:text-3xl md:font-semibold mb-4 tracking-wider leading-relaxed">
          Find Your Perfect Stay <br /> Hassle-Free Bookings!
        </h1>
        <p className="text-md text-white mb-6 w-[70%] leading-8">
          Book monthly or daily stays instantly with our verified hostels. Enjoy
          secure payments and direct communication with property owners.
        </p>
        <div className="flex items-center gap-y-4 flex-wrap justify-center gap-x-4">
          <button
            className="bg-white text-black text-sm px-5 py-2 border border-white cursor-pointer"
            onClick={() => navigate("/hostel-listings", { replace: true })}
          >
            Find Hostels
          </button>
          <button
            className="bg-transparent text-white text-sm px-5 py-2 border border-white cursor-pointer"
            onClick={() => window.open("/admin-login", "_blank")}
          >
            List Hostel
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
