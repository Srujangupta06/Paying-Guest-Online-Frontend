import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center md:justify-normal min-h-screen">
      <img
        src="https://res.cloudinary.com/djv3sgbxn/image/upload/q_auto,f_auto,w_500/v1741177822/404_Error-rafiki_r86hza.png"
        alt="not found image"
        className="w-full md:w-1/3"
      />

      <h1 className="text-xl md:text-4xl font-bold text-gray-600">
        Page Not Found
      </h1>
      <p className="text-md md:text-lg text-gray-600 mt-2 text-center">
        Oops! The page you are looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="cursor-pointer mt-6 px-6 py-2  bg-gray-600 text-white text-sm  rounded-sm shadow-md"
      >
        Back to Home
      </button>
    </div>
  );
};

export default PageNotFound;
