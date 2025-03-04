const CustomerFeedBackCard = (props) => {
  const { id } = props;
  return (
    <li className="w-[90%] md:w-[300px] flex flex-col items-center p-4 my-4 shadow-lg rounded-lg list-none">
      <div className="h-8 w-8 rounded-full bg-gray-300 mb-4"></div>
      <p className="text-[16px] font-semibold mb-4">
        "
        {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse varius enim in eros elementum tristique. Duis cursus,mi quis viverra ornare"
        }
        "
      </p>

      <h3 className="self-end text-sm text-gray-500">
        -{id} {"Name"}
      </h3>
    </li>
  );
};

export default CustomerFeedBackCard;
