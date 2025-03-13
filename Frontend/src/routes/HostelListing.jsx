import React from "react";
import HostelSearchBar from "./HostelSearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HostelListing = ({ pgListings }) => {
  const [filteredPGs, setFilteredPGs] = useState(pgListings);
  const [isVerified, setIsVerified] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const navigate = useNavigate();
  const handleFilterChange = (type, ac) => {
    let filteredData = pgListings;

    if (type !== "All") {
      filteredData = filteredData.filter((pg) => pg.type === type);
    }

    if (ac !== "All") {
      filteredData = filteredData.filter((pg) =>
        ac === "AC" ? pg.ac === true : pg.ac === false
      );
    }

    if (isVerified) {
      filteredData = filteredData.filter((pg) => pg.verified);
    }

    if (selectedPriceRange !== "All") {
      const [min, max] = selectedPriceRange.split("-").map(Number);
      filteredData = filteredData.filter(
        (pg) => pg.price >= min && pg.price <= max
      );
    }

    setFilteredPGs(filteredData);
  };

  const handleVerifiedClick = () => {
    setIsVerified((prev) => !prev);
    handleFilterChange("All", "All");
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
    handleFilterChange("All", "All");
  };

  return (
    <div>
      <HostelSearchBar
        onFilterChange={handleFilterChange}
        onVerifiedClick={handleVerifiedClick}
        selectedPriceRange={selectedPriceRange}
        onPriceRangeChange={handlePriceRangeChange}
        isVerified={isVerified}
      />
      <div className="p-5 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPGs.map((pg) => (
            <div
              key={pg.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 group"
            >
              <img
                src={pg.image}
                alt={pg.name}
                className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
              <div className="p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`px-3 py-1 text-xs sm:text-sm font-medium rounded ${
                      pg.type === "Girls"
                        ? "bg-pink-200 text-pink-700"
                        : "bg-blue-200 text-blue-700"
                    }`}
                  >
                    {pg.type}
                  </span>
                  {pg.verified && (
                    <span className="px-3 py-1 text-xs sm:text-sm font-medium bg-green-200 text-green-700 rounded">
                      PGO Verified
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-base sm:text-lg font-semibold text-gray-800">
                  {pg.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {pg.location}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-gray-700 font-medium">
                  {pg.distance}
                </p>
                <p className="mt-2 text-base sm:text-lg font-semibold text-gray-900">
                  {pg.price}
                </p>
                <div className="mt-4">
                  <button
                    onClick={() => navigate(`/hostel-listings/${pg.id}`)}
                    className="w-full px-4 py-2 text-sm sm:text-base bg-gray-500 text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-700"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredPGs.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No PGs match your filter criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default HostelListing;
