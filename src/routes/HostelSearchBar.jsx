// import { FaSearch } from "react-icons/fa";
// import { useState } from "react";

// const HostelSearchBar = ({
//   onFilterChange,
//   onVerifiedClick,
//   isVerified,
//   selectedPriceRange,
//   onPriceRangeChange,
// }) => {
//   const [selectedType, setSelectedType] = useState("All");
//   const [selectedAc, setSelectedAc] = useState("All");
//   const [showFilters, setShowFilters] = useState(false); // For mobile filter modal
//   const [selectedFilters, setSelectedFilters] = useState({ amenities: [] });

//   const amenitiesList = [
//     "Bed & Mattress",
//     "CC Cameras",
//     "Gym",
//     "Hot Water",
//     "Lift",
//     "Mineral Water",
//     "Non-AC",
//     "Parking",
//     "RO Water Purifier",
//     "Safety Lockers",
//     "Self Cooking",
//     "Toilets Attached",
//     "Wardrobes",
//     "Washing Machine",
//     "WiFi",
//   ];

//   const handleTypeChange = (event) => {
//     setSelectedType(event.target.value);
//     onFilterChange(event.target.value, selectedAc);
//   };

//   const handleAcChange = (event) => {
//     setSelectedAc(event.target.value);
//     onFilterChange(selectedType, event.target.value);
//   };

//   const toggleAmenity = (amenity) => {
//     setSelectedFilters((prev) => {
//       const newAmenities = prev.amenities.includes(amenity)
//         ? prev.amenities.filter((item) => item !== amenity)
//         : [...prev.amenities, amenity];
//       return { ...prev, amenities: newAmenities };
//     });
//   };

//   return (
//     <div className="bg-gray-100 p-6 flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-start rounded-lg w-full shadow-md">
//       {/* Search Fields */}
//       <div className="relative flex-1 min-w-[250px]">
//         <input
//           type="text"
//           placeholder="Enter area, city"
//           className="px-4 py-3 pl-10 border bg-white border-gray-300 rounded-lg text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
//           aria-label="Search by area or city"
//         />
//         <FaSearch className="absolute left-4 top-3 text-blue-600 text-lg" />
//       </div>
//       <div className="relative flex-1 min-w-[250px]">
//         <input
//           type="text"
//           placeholder="Property Name"
//           className="px-4 py-3 pl-10 border bg-white border-gray-300 rounded-lg text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
//           aria-label="Search by property name"
//         />
//         <FaSearch className="absolute left-4 top-3 text-blue-600 text-lg" />
//       </div>

//       {/* Web Filters */}
//       <div className="hidden sm:flex flex-wrap gap-2">
//         <select
//           className="px-2 py-2 bg-white border rounded-md text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
//           value={selectedType}
//           onChange={handleTypeChange}
//         >
//           <option value="All">All</option>
//           <option value="Boys">Boys</option>
//           <option value="Girls">Girls</option>
//         </select>
//         <select
//           className="px-2 py-2 bg-white border rounded-md text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
//           value={selectedAc}
//           onChange={handleAcChange}
//         >
//           <option value="All">All</option>
//           <option value="AC">AC</option>
//           <option value="Non-AC">Non-AC</option>
//         </select>
//         <button
//           className={`px-2 py-2 rounded-md text-xs font-medium border transition-all ${
//             isVerified ? "bg-blue-600 text-white" : "bg-white text-gray-700"
//           } hover:bg-blue-500 hover:text-white`}
//           onClick={onVerifiedClick}
//         >
//           Verified
//         </button>
//       </div>

//       {/* Mobile Filter Button */}
//       <button
//         className="sm:hidden px-4 py-3 rounded-lg text-sm font-medium border bg-white hover:bg-blue-500 hover:text-white w-full transition-all"
//         onClick={() => setShowFilters(true)}
//         aria-expanded={showFilters}
//       >
//         Filters
//       </button>

//       {/* Mobile Filters Modal */}
//       {showFilters && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[500px]">
//             <h3 className="text-lg font-semibold text-gray-700 mb-4">
//               Select Filters
//             </h3>
//             <div className="flex flex-col gap-4">
//               <input
//                 type="text"
//                 placeholder="Enter area, city"
//                 className="px-4 py-3 border bg-white border-gray-300 rounded-lg text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
//               />
//               <input
//                 type="text"
//                 placeholder="Property Name"
//                 className="px-4 py-3 border bg-white border-gray-300 rounded-lg text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
//               />
//               <select
//                 className="px-4 py-3 bg-white border rounded-lg text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
//                 value={selectedType}
//                 onChange={handleTypeChange}
//               >
//                 <option value="All">All</option>
//                 <option value="Boys">Boys</option>
//                 <option value="Girls">Girls</option>
//               </select>
//               <select
//                 className="px-4 py-3 bg-white border rounded-lg text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
//                 value={selectedAc}
//                 onChange={handleAcChange}
//               >
//                 <option value="All">All</option>
//                 <option value="AC">AC</option>
//                 <option value="Non-AC">Non-AC</option>
//               </select>
//               <button
//                 className={`px-4 py-3 rounded-lg text-sm font-medium border transition-all ${
//                   isVerified ? "bg-blue-600 text-white" : "bg-white text-gray-700"
//                 } hover:bg-blue-500 hover:text-white`}
//                 onClick={onVerifiedClick}
//               >
//                 Verified
//               </button>
//             </div>
//             <h4 className="mt-4 text-md font-medium text-gray-700">Amenities</h4>
//             <div className="flex flex-wrap gap-2 mt-2">
//               {amenitiesList.map((amenity, index) => (
//                 <button
//                   key={index}
//                   className={`px-3 py-2 rounded-md text-sm font-medium border transition-all ${
//                     selectedFilters.amenities.includes(amenity)
//                       ? "bg-blue-600 text-white"
//                       : "bg-gray-200 text-gray-700"
//                   } hover:bg-blue-500 hover:text-white`}
//                   onClick={() => toggleAmenity(amenity)}
//                 >
//                   {amenity}
//                 </button>
//               ))}
//             </div>
//             <div className="flex justify-between mt-4">
//               <button
//                 className="text-blue-600 font-medium hover:underline"
//                 onClick={() => setShowFilters(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all"
//                 onClick={() => setShowFilters(false)}
//               >
//                 Apply
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HostelSearchBar;


// import { FaSearch, FaFilter } from "react-icons/fa";
// import { useState } from "react";

// const HostelSearchBar = ({
//   onFilterChange,
//   onVerifiedClick,
//   isVerified,
//   selectedPriceRange,
//   onPriceRangeChange,
// }) => {
//   const [selectedType, setSelectedType] = useState("All");
//   const [selectedAc, setSelectedAc] = useState("All");
//   const [showFilters, setShowFilters] = useState(false);
//   const [selectedFilters, setSelectedFilters] = useState({ amenities: [] });

//   const amenitiesList = [
//     "Bed & Mattress",
//     "CC Cameras",
//     "Gym",
//     "Hot Water",
//     "Lift",
//     "Mineral Water",
//     "Non-AC",
//     "Parking",
//     "RO Water Purifier",
//     "Safety Lockers",
//     "Self Cooking",
//     "Toilets Attached",
//     "Wardrobes",
//     "Washing Machine",
//     "WiFi",
//   ];

//   const handleTypeChange = (event) => {
//     setSelectedType(event.target.value);
//     onFilterChange(event.target.value, selectedAc);
//   };

//   const handleAcChange = (event) => {
//     setSelectedAc(event.target.value);
//     onFilterChange(selectedType, event.target.value);
//   };

//   const toggleAmenity = (amenity) => {
//     setSelectedFilters((prev) => {
//       const newAmenities = prev.amenities.includes(amenity)
//         ? prev.amenities.filter((item) => item !== amenity)
//         : [...prev.amenities, amenity];
//       return { ...prev, amenities: newAmenities };
//     });
//   };

//   return (
//     <div className="bg-gray-100 p-6 flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-start rounded-lg w-full shadow-md">
//       {/* Search Fields */}
//       <div className="relative flex-1 min-w-[250px]">
//         <input
//           type="text"
//           placeholder="Enter area, city"
//           className="px-4 py-3 pl-10 border bg-white border-gray-300 rounded-lg text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
//         />
//         <FaSearch className="absolute left-4 top-3 text-blue-600 text-lg" />
//       </div>
//       <div className="relative flex-1 min-w-[250px]">
//         <input
//           type="text"
//           placeholder="Property Name"
//           className="px-4 py-3 pl-10 border bg-white border-gray-300 rounded-lg text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
//         />
//         <FaSearch className="absolute left-4 top-3 text-blue-600 text-lg" />
//       </div>

//       {/* Filters */}
//       <div className="hidden sm:flex flex-wrap gap-2">
//         <select
//           className="px-2 py-2 bg-white border rounded-md text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
//           value={selectedType}
//           onChange={handleTypeChange}
//         >
//           <option value="All">All</option>
//           <option value="Boys">Boys</option>
//           <option value="Girls">Girls</option>
//         </select>
//         <select
//           className="px-2 py-2 bg-white border rounded-md text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
//           value={selectedAc}
//           onChange={handleAcChange}
//         >
//           <option value="All">All</option>
//           <option value="AC">AC</option>
//           <option value="Non-AC">Non-AC</option>
//         </select>
//         <button
//           className={`px-2 py-2 rounded-md text-xs font-medium border transition-all ${
//             isVerified ? "bg-blue-600 text-white" : "bg-white text-gray-700"
//           } hover:bg-blue-500 hover:text-white`}
//           onClick={onVerifiedClick}
//         >
//           Verified
//         </button>
//       </div>

//       {/* Mobile Filter Button */}
//       <button
//         className="sm:hidden p-3 rounded-lg border bg-white hover:bg-blue-500 hover:text-white transition-all"
//         onClick={() => setShowFilters(true)}
//       >
//         <FaFilter className="text-blue-600 text-lg" />
//       </button>

//       {/* Mobile Filters Modal */}
//       {showFilters && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[500px]">
//             <h3 className="text-lg font-semibold text-gray-700 mb-4">Select Filters</h3>
//             <div className="flex flex-col gap-4">
//               <select className="p-3 border rounded-lg" value={selectedType} onChange={handleTypeChange}>
//                 <option value="All">All</option>
//                 <option value="Boys">Boys</option>
//                 <option value="Girls">Girls</option>
//               </select>
//               <select className="p-3 border rounded-lg" value={selectedAc} onChange={handleAcChange}>
//                 <option value="All">All</option>
//                 <option value="AC">AC</option>
//                 <option value="Non-AC">Non-AC</option>
//               </select>
//             </div>
//             <h4 className="mt-4 text-md font-medium text-gray-700">Amenities</h4>
//             <div className="flex flex-wrap gap-2 mt-2">
//               {amenitiesList.map((amenity, index) => (
//                 <button
//                   key={index}
//                   className={`px-3 py-2 rounded-md text-sm font-medium border transition-all ${
//                     selectedFilters.amenities.includes(amenity) ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
//                   } hover:bg-blue-500 hover:text-white`}
//                   onClick={() => toggleAmenity(amenity)}
//                 >
//                   {amenity}
//                 </button>
//               ))}
//             </div>
//             <div className="flex justify-between mt-4">
//               <button className="text-blue-600 font-medium hover:underline" onClick={() => setShowFilters(false)}>
//                 Cancel
//               </button>
//               <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all" onClick={() => setShowFilters(false)}>
//                 Apply
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HostelSearchBar;

import { FaSearch, FaFilter } from "react-icons/fa";
import { useState } from "react";
import Header from "../components/Header"

const HostelSearchBar = ({
  onFilterChange,
  onVerifiedClick,
  isVerified,
  selectedPriceRange,
  onPriceRangeChange,
}) => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedAc, setSelectedAc] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({ amenities: [] });

  const amenitiesList = [
    "Bed & Mattress",
    "CC Cameras",
    "Gym",
    "Hot Water",
    "Lift",
    "Mineral Water",
    "Non-AC",
    "Parking",
    "RO Water Purifier",
    "Safety Lockers",
    "Self Cooking",
    "Toilets Attached",
    "Wardrobes",
    "Washing Machine",
    "WiFi",
  ];

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    onFilterChange(event.target.value, selectedAc);
  };

  const handleAcChange = (event) => {
    setSelectedAc(event.target.value);
    onFilterChange(selectedType, event.target.value);
  };

  const toggleAmenity = (amenity) => {
    setSelectedFilters((prev) => {
      const newAmenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter((item) => item !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities: newAmenities };
    });
  };

  return (
    <div className="bg-gray-100 p-6 flex flex-col sm:flex-row flex-wrap gap-4 items-start justify-start rounded-lg w-full shadow-md">

      {/* Search Fields */}
      <div className="relative flex-1 min-w-[250px]">
        <input
          type="text"
          placeholder="Enter area, city"
          className="px-4 py-3 pl-10 border bg-white border-gray-300 rounded-lg text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
        />
        <FaSearch className="absolute left-4 top-3 text-blue-600 text-lg" />
      </div>
      <div className="relative flex-1 min-w-[250px]">
        <input
          type="text"
          placeholder="Property Name"
          className="px-4 py-3 pl-10 border bg-white border-gray-300 rounded-lg text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
        />
        <FaSearch className="absolute left-4 top-3 text-blue-600 text-lg" />
      </div>

      {/* Filters */}
      <div className="hidden sm:flex flex-wrap gap-2 items-center">
        <select
          className="px-2 py-2 bg-white border rounded-md text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="All">All</option>
          <option value="Boys">Boys</option>
          <option value="Girls">Girls</option>
        </select>
        <select
          className="px-2 py-2 bg-white border rounded-md text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none text-sm"
          value={selectedAc}
          onChange={handleAcChange}
        >
          <option value="All">All</option>
          <option value="AC">AC</option>
          <option value="Non-AC">Non-AC</option>
        </select>
        <button
          className={`px-2 py-2 rounded-md text-xs font-medium border transition-all ${
            isVerified ? "bg-blue-600 text-white" : "bg-white text-gray-700"
          } hover:bg-blue-500 hover:text-white`}
          onClick={onVerifiedClick}
        >
          Verified
        </button>
        <button
          className="px-2 py-2 bg-white border rounded-md text-gray-700 font-medium hover:bg-blue-500 hover:text-white transition-all"
          onClick={() => setShowFilters(true)}
        >
          Amenities
        </button>
      </div>

      {/* Mobile Filter Button */}
      <button
        className="sm:hidden p-3 rounded-lg border bg-white hover:bg-blue-500 hover:text-white transition-all"
        onClick={() => setShowFilters(true)}
      >
        <FaFilter className="text-blue-600 text-lg" />
      </button>

      {/* Filters Modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[500px]">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Select Filters</h3>
            <div className="flex flex-col gap-4">
              <select className="p-3 border rounded-lg" value={selectedType} onChange={handleTypeChange}>
                <option value="All">All</option>
                <option value="Boys">Boys</option>
                <option value="Girls">Girls</option>
              </select>
              <select className="p-3 border rounded-lg" value={selectedAc} onChange={handleAcChange}>
                <option value="All">All</option>
                <option value="AC">AC</option>
                <option value="Non-AC">Non-AC</option>
              </select>
            </div>
            <h4 className="mt-4 text-md font-medium text-gray-700">Amenities</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {amenitiesList.map((amenity, index) => (
                <button
                  key={index}
                  className={`px-3 py-2 rounded-md text-sm font-medium border transition-all ${
                    selectedFilters.amenities.includes(amenity) ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
                  } hover:bg-blue-500 hover:text-white`}
                  onClick={() => toggleAmenity(amenity)}
                >
                  {amenity}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button className="text-blue-600 font-medium hover:underline" onClick={() => setShowFilters(false)}>
                Cancel
              </button>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all" onClick={() => setShowFilters(false)}>
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  
  );
};

export default HostelSearchBar;
