

const About = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 bg-gray-50 min-h-screen">
      <div className="text-center p-6 sm:p-10">

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2 p-4">
            <img 
              src="https://bookmypg.co.in/assets/front/images/about.png" 
              className="w-full max-w-md mx-auto md:mx-0"
              alt="About Us"
            />
          </div>
          <div className="md:w-1/2 w-full text-center md:text-left p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
              <span className="font-semibold">Trust</span><br /> Your Booking Partner
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-light text-gray-800 mt-4">
              At <span className="font-semibold text-black">Paying-Guest Online,</span> we prioritize trust and convenience, 
              making your hostel and PG booking experience seamless and secure.
            </p>
            <p className="font-bold text-sm sm:text-lg text-center md:text-left italic mt-5">
              Book with confidence at PGO!
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 flex flex-col md:flex-row-reverse items-center justify-center gap-6">
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="https://st2.depositphotos.com/2059749/6611/i/450/depositphotos_66115863-stock-photo-why-choose-us.jpg"
              className="w-full max-w-sm mx-auto md:h-[250px] object-cover"
              alt="Why Choose Us"
            />
          </div>
          <div className="w-full md:w-1/2 pt-4 lg:pt-0 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
              <span className="text-lg sm:text-xl font-medium">Benefits</span><br />
              Why Choose Us for Your Booking Needs?
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-light pt-4">
              At <span className="font-bold italic">PGO</span>, we make hostel and PG bookings easy, secure, and hassle-free.
            </p>
          </div>
        </div>

        {/* Benefits Cards - Responsive Grid */}
        <div className="mt-12 px-2 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Key Benefits for Tenants",
                text: "Enjoy verified accommodations, secure payments, and flexible stay options.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6P3lonz51VlLdC6HK9_LuGiYU-FI8nT6fw&s"
              },
              {
                title: "Key Benefits for Hostel Owners",
                text: "Boost your visibility and streamline property management effortlessly.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6P3lonz51VlLdC6HK9_LuGiYU-FI8nT6fw&s"
              },
              {
                title: "Our Commitment to Quality & Trust",
                text: "We ensure transparency and reliability in every booking.",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6P3lonz51VlLdC6HK9_LuGiYU-FI8nT6fw&s"
              }
            ].map((card, index) => (
              <div 
                key={index} 
                className="bg-white shadow-lg flex flex-col items-center p-6 rounded-lg transition-all duration-500 
                          hover:shadow-2xl hover:scale-105 hover:bg-gray-100 text-center"
              >
                <img 
                  src={card.img} 
                  className="w-20 rounded-full transition-all duration-500 hover:scale-110"
                  alt={card.title}
                />
                <h1 className="text-lg sm:text-xl font-bold pt-4">{card.title}</h1>
                <p className="text-sm sm:text-base lg:text-lg font-light pt-4">{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <p className="mt-14 text-sm sm:text-lg max-w-3xl mx-auto text-center">
          At PGO, we simplify your search for the perfect stay with seamless bookings, secure payments, and verified listings.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-4">
          {[
            { title: "Our Mission", text: "To make hostel and PG bookings effortless and secure." },
            { title: "Our Vision", text: "To be the most trusted platform for hostel accommodations." },
            { title: "Our Values", text: "Transparency, security, and customer satisfaction." }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 shadow-md rounded-lg transition-all duration-500 
                        hover:shadow-xl hover:scale-105 hover:bg-gray-50 text-center"
            >
              <h3 className="text-lg sm:text-xl font-bold pb-4">{item.title}</h3>
              <p className="text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;



