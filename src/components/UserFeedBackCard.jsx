const UserFeedBackCard = (props) => {
  const { feedback } = props;
  const { review, name } = feedback;
  return (
    <li className="w-[90%] h-[280px] md:w-[380px] flex flex-col items-center p-6 my-4 shadow-xl  mx-auto rounded-xl border border-gray-200 bg-white/40 ">
      {/* Quote Icon */}
      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-gray-300 text-white text-lg font-bold mb-4">
        ❝
      </div>

      {/* Testimonial Text */}
      <p className="text-[18px] font-medium text-gray-800 text-center leading-relaxed mb-4">
        “{review}”
      </p>

      {/* Name */}
      <h3 className="self-end text-sm font-semibold text-gray-600">-{name}</h3>
    </li>
  );
};

export default UserFeedBackCard;
