import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomerFeedBackCard from "./UserFeedBackCard";
import UserFeedBackCard from "./UserFeedBackCard";

const UserFeedBack = () => {
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
  return (
    <section className="px-6 sm:px-0  w-full flex flex-col items-center mb-6 sm:mb-12  sm:py-0">
      <h1 className="text-xl md:text-2xl font-semibold text-center tracking-wider leading-relaxed ">
        What Our Customers Say
      </h1>
      {/*Make an API call to get feedback from customers */}
      <div className="w-full overflow-hidden mt-2 md:mt-4">
        <Slider {...customerFeedbackSliderSettings}>
          <UserFeedBackCard id={1}/>
          <UserFeedBackCard id={2}/>
          <UserFeedBackCard id={3}/>
          <UserFeedBackCard id={4}/>
          <UserFeedBackCard id={5}/>
        </Slider>
      </div>
    </section>
  );
};

export default UserFeedBack;
