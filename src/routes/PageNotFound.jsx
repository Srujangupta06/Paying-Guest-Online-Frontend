import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-2">
        Oops! The page you are looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-2  bg-red-600 text-white text-sm  rounded-sm shadow-md hover:bg-red-700  transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default PageNotFound;
