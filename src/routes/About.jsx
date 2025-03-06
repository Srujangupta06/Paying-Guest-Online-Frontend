const About = () => {
  return (
    <div className="pb-20">
      {/*Section 1 */}
      <div className="mt-6 flex flex-col md:flex-row items-center md:justify-between px-6 sm:px-32 gap-y-6 py-6">
        <div className="w-full md:w-1/2 text-center sm:text-left">
          <h1 className="text-xl lg:text-2xl xl:text-4xl font-semibold tracking-wide leading-relaxed">
            Your Trusted Partner for Hassle-Free Hostel & PG Bookings!
          </h1>
          <p className="text-sm mt-5 leading-relaxed">
            We simplify your search for the perfect stay – seamless bookings,
            secure payments & verified listings.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-4">
            <button
              className="bg-black text-white w-28 md:w-40 p-2 hover:shadow-2xl transition duration-500 rounded 
                hover:scale-110 cursor-pointer text-sm"
            >
              Find Hostel
            </button>
            <button
              className="bg-white text-black w-28 md:w-40 p-2 hover:shadow-2xl transition duration-500 rounded border-2
                hover:scale-110 text-sm cursor-pointer"
            >
              List Your Hostel
            </button>
          </div>
        </div>
        <div className="w-[70%] md:w-1/3  flex justify-end">
          <img
            src="https://content.jdmagicbox.com/comp/def_content/paying_guest_accommodations/default-paying-guest-accommodations-5-250.jpg"
            className="shadow-2xl w-full md:w-2/3 mt-8 lg:mt-0 items-center rounded-full"
          />
        </div>
      </div>
      {/*Section 2 */}
      <div className="mt-6 px-6 sm:px-32  py-6">
        <div className="min-w-4/12">
          <h1 className="text-xl lg:text-2xl xl:text-4xl font-semibold tracking-wide leading-relaxed">
            Trust Your Booking Partner
          </h1>
          <p className="text-sm  mt-5">
            At Paying Guest Online, we streamline your hostel and PG bookings
            with ease and security. Our platform connects you with verified
            listings, ensuring a worry-free experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-4">
            <button
              className="bg-black text-white w-28 md:w-40 p-2 rounded text-sm cursor-pointer hover:shadow-2xl 
                hover:scale-110 transition duration-500"
            >
              Learn More
            </button>
            <button
              className="bg-white text-black w-28 md:w-40 p-2 border-2 rounded text-sm cursor-pointer
                hover:shadow-2xl hover:scale-110 transition duration-500"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {/*Section 3 */}
      <div className="mt-6 text-start px-6 sm:px-32 py-6">
        <h1 className="text-xl lg:text-2xl xl:text-4xl font-semibold tracking-wide leading-relaxed">
          <span className="text-base font-medium text-gray-600">Benefits</span>
          <br />
          Why Choose Us for Your Booking Needs?
        </h1>
        <p className="text-sm pt-4">
          We offer a range of features designed to enhance your booking
          experience. From verified listings to secure payments, we prioritize
          your comfort and safety.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 mt-8">
          <div className="mx-auto w-80 flex flex-col justify-center items-center p-6 shadow-xl rounded-sm border border-gray-200">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6P3lonz51VlLdC6HK9_LuGiYU-FI8nT6fw&s"
              className="w-24 rounded-t-full"
            ></img>
            <div className="text-center">
              <h1 className="text-md font-semibold pt-4">
                Key Benefits for Tenants
              </h1>
              <p className="text-sm  pt-4 text-gray-600">
                Enjoy verified accommodations, secure payments, and flexible
                stay options.
              </p>
            </div>
          </div>
          <div className="mx-auto w-80 flex flex-col justify-center items-center p-6 shadow-xl rounded-sm border border-gray-200">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6P3lonz51VlLdC6HK9_LuGiYU-FI8nT6fw&s"
              className="w-24 rounded-t-full"
            ></img>
            <div className="text-center">
              <h1 className="text-md font-semibold pt-4">
                Key Benefits for Hostel Owners
              </h1>
              <p className="text-sm text-gray-600 pt-4">
                Boost your visibility and streamline property management
                effortlessly.
              </p>
            </div>
          </div>
          <div className="mx-auto w-80 flex flex-col justify-center items-center p-6 shadow-xl rounded-sm border border-gray-200">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6P3lonz51VlLdC6HK9_LuGiYU-FI8nT6fw&s"
              className="w-24 rounded-t-full"
            ></img>
            <div className="text-center">
              <h1 className="text-md font-semibold pt-4">
                Our Commitment to Quality and Trust
              </h1>
              <p className="text-sm pt-4">
                We ensure transparency and reliability in every booking.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <button
            className="border-1 mr-4 text-black w-40 p-2 rounded text-sm cursor-pointer hover:shadow-2xl hover:scale-110
                transiton duration-500"
          >
            Learn More
          </button>
          <button
            className="text-black w-40 p-2 rounded text-sm cursor-pointer hover:shadow-2xl hover:scale-110
                transiton duration-500"
          >
            Sign Up
          </button>
        </div>
      </div>
      {/*Section 4 */}
      <div className="mt-6 text-start px-6 sm:px-32 py-6">
        <p className="text-md leading-relaxed">
          At PGO, we simplify your search for the perfect stay with seamless
          bookings, secure payments, and verified listings. Our mission is to
          provide a trustworthy and efficient platform for tenants and hostel
          owners alike.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
          <div className="mx-auto bg-white p-6 shadow rounded w-full sm:w-80 border border-gray-200">
            <h3 className="font-semibold text-xl mb-4">Our Mission</h3>
            <p className="text-sm">
              Our mission is to simplify PG accommodation searches with a
              reliable, user-friendly platform that connects PG owners and
              tenants. We ensure safety, affordability, and convenience through
              technology, making the process hassle-free for students and
              professionals.
            </p>
          </div>
          <div className="mx-auto bg-white p-6 shadow rounded w-full sm:w-80 border border-gray-200">
            <h3 className="font-semibold text-xl mb-4">Our Vision</h3>
            <p className="text-sm">
              Our vision is to be the most trusted platform for PG
              accommodations, setting new industry standards with transparency,
              security, and ease. We strive to simplify the search process,
              ensuring a stress-free experience through innovation and
              technology.
            </p>
          </div>
          <div className="mx-auto bg-white p-6 shadow rounded w-full sm:w-80 border border-gray-200">
            <h3 className="font-semibold text-xl mb-4">Our Values</h3>
            <p className="text-sm">
              We value trust, transparency, and verified listings for honest
              communication. Our focus on convenience, affordability, and
              quality ensures a seamless PG booking experience. Driven by
              innovation and a customer-centric approach, we prioritize comfort,
              safety, and continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
