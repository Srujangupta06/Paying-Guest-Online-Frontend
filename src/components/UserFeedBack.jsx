import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserFeedBackCard from "./UserFeedBackCard";
import { useEffect } from "react";
import { useState } from "react";

const UserFeedBack = () => {
  const [customerFeedback, setCustomerFeedback] = useState([]);
  const customerFeedbackSliderSettings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          speed: 1000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 800,
        },
      },
    ],
  };

  const fetchCustomerFeedback = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/user/customer-reviews"
      );
      if (response.ok) {
        const data = await response.json();
        const popularFeedback = data.filter((feedback) => feedback.rating > 4);
        setCustomerFeedback(popularFeedback);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCustomerFeedback();
  }, []);

  return (
    <section className="w-full flex flex-col items-center mb-6 sm:mb-12  sm:py-0 justify-between px-6 sm:px-10 md:px-32 ">
      <h1 className="text-xl md:text-2xl font-semibold text-center tracking-wider leading-relaxed ">
        What Our Customers Say
      </h1>
      {/*Make an API call to get feedback from customers */}
      <div className="w-full overflow-hidden mt-2 md:mt-4">
        <Slider {...customerFeedbackSliderSettings}>
          {customerFeedback.map((feedback) => (
            <UserFeedBackCard key={feedback._id} feedback={feedback} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default UserFeedBack;
