const About = () => {
  return (
    <div>
      <div className="text-center bg-gray-50 p-10 pt-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-screen md:w-3/6 p-10">
            <img src="https://bookmypg.co.in/assets/front/images/about.png" className="w-full"></img>
          </div>
          <div className="md:w-3/6 w-full mt-18 flex flex-col md:flex-row md:text-left md:items-center p-6">
            <div className="mx-auto">
              <h1 className="text-xl lg:text-2xl xl:text-4xl font-extrabold">
              <span className="font-semibold">Trust</span><br/> Your Booking Partner</h1>
              <h1 className="text-sm md:text-base lg:text-xl font-light text-gray-800 mt-5">
                At <span className="font-semibold text-black">Paying Guest Online,</span> we prioritize trust and convenience, 
                making your hostel and PG booking experience seamless and secure. Whether you're a student, working professional, or 
                traveler, finding the right accommodation can be challenging. That’s why we’ve built a platform that connects you with 
                verified listings, ensuring transparency and reliability.<br/><br/>
                Our user-friendly interface allows you to explore a wide range 
                of accommodations, compare options, and make informed decisions with ease. Every listing undergoes a rigorous verification 
                process, so you can book with confidence, knowing that your stay will be safe and comfortable.<br/><br/>
                With secure payment options, real-time availability updates, and 24/7 customer support, we take the stress out of house hunting, ensuring a worry-free experience from start to finish.
              </h1>
              <br/>
              <p className="font-bold text-sm md:text-xl text-center italic">Book with confidence at PGO!</p>
            </div>
          </div>
        </div>


          <div className="mt-16 text-start p-6 flex flex-col md:flex-row-reverse items-center justify-center  md:gap-6">
            <div className="w-1/2 flex justify-end">
              <img src="https://st2.depositphotos.com/2059749/6611/i/450/depositphotos_66115863-stock-photo-why-choose-us.jpg"
               className="w-[80%] md:h-[250px] md:w-[250px]"></img>
            </div>
            <div className="w-full md:w-1/2 pt-4 lg:pt-0">
              <h1 className="text-xl lg:text-4xl font-extrabold"><span className="text-base font-medium">Benefits</span><br/> 
              Why Choose Us for Your Booking Needs?</h1>
              <p className="text-sm md:text-base lg:text-xl font-light pt-4">At <span className="font-bold italic">PGO</span>, we make 
                hostel and PG bookings easy, secure, and hassle-free. Our verified listings ensure safe stays, while secure 
                payments protect your transactions. With no hidden charges, clear policies, and a wide selection of accommodations, 
                you can compare, choose, and book in just a few clicks. Plus, our reliable customer support is always here to help.</p> 
                <br/>
            </div>
          </div>


          <div className="mt-12 p-6">
            <div className="flex flex-wrap flex-col md:flex-row items-center gap-4">
              <div className="w-80 shadow flex flex-col justify-center items-center p-6 hover:shadow-neutral-950">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6P3lonz51VlLdC6HK9_LuGiYU-FI8nT6fw&s" 
                className="w-24 rounded-t-full"></img>
                <h1 className="text-xl font-bold pt-4">Key Benefits for Tenants</h1>
                <p className="text-sm md:text-base font-light pt-4">Enjoy verified accommodations, secure payments, and 
                flexible stay options.</p>
              </div>
              <div className="w-80 shadow flex flex-col justify-center items-center p-6 hover:shadow-neutral-950">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6P3lonz51VlLdC6HK9_LuGiYU-FI8nT6fw&s" 
                className="w-24 rounded-t-full"></img>
                <h1 className="text-xl font-bold pt-4">Key Benefits for Hostel Owners</h1>
                <p className="text-sm md:text-base font-light pt-4">Boost your visibility and streamline property 
                management effortlessly.</p>
              </div>
              <div className="w-80 shadow flex flex-col justify-center items-center p-6 hover:shadow-neutral-950">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6P3lonz51VlLdC6HK9_LuGiYU-FI8nT6fw&s" 
                className="w-24 rounded-t-full"></img>
                <h1 className="text-xl font-bold pt-4">Our Commitment to Quality 
                and Trust</h1>
                <p className="text-sm md:text-base font-light pt-4">We ensure transparency and reliability in every booking.</p>
              </div>
            </div>
          </div>


            <p className="mt-14 text-lg max-w-3xl mx-auto">
              At PGO, we simplify your search for the perfect stay with seamless bookings, secure payments, and verified listings. Our mission is to provide a trustworthy and efficient platform for tenants and hostel owners alike.
            </p>

          <div className="mt-6 flex flex-col md:flex-row flex-wrap items-center md:justify-center gap-6">
            <div className="bg-white p-6 shadow rounded w-80 hover:shadow-2xl hover:scale-110 transition duration-500">
              <h3 className="font-bold text-xl pb-4">Our Mission</h3>
              <p>To make hostel and PG bookings effortless and secure.</p>
            </div>
            <div className="bg-white p-6 shadow rounded w-80 hover:shadow-2xl hover:scale-110 transition duration-500">
              <h3 className="font-bold text-xl pb-4">Our Vision</h3>
              <p>To be the most trusted platform for hostel accommodations.</p>
            </div>
            <div className="bg-white p-6 shadow rounded w-80 hover:shadow-2xl hover:scale-110 transition duration-500">
              <h3 className="font-bold text-xl pb-4">Our Values</h3>
              <p>Transparency, security, and customer satisfaction.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
