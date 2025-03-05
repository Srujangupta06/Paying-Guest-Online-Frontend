import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomerFeedBackCard from "../components/CustomerFeedBackCard";

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
    <section className="w-full max-w-5xl mb-8 py-4">
      <h1 className="text-2xl font-semibold md:text-center">
        What Our Customers Say
      </h1>
      {/*Make an API call to get feedback from customers */}
      <div className="w-full overflow-hidden mt-6 md:mt-4">
        <Slider {...customerFeedbackSliderSettings}>
          <CustomerFeedBackCard id={1} />
          <CustomerFeedBackCard id={2} />
          <CustomerFeedBackCard id={3} />
          <CustomerFeedBackCard id={4} />
          <CustomerFeedBackCard id={5} />
        </Slider>
      </div>
    </section>
  );
};

export default UserFeedBack;
