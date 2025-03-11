import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";
import LoadingUi from "./components/LoadingUi";
{
  /*Lazy loading for the respective routes */
}

const pgListings = [
  {
    id: 1,
    type: "Girls",
    exclusive: true,
    verified: true,
    name: "Sandhya Luxury Womens Pg",
    location: "Madhura Nagar, Gachibowli, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "12.03 KMS",
    price: "₹7000/Month",
    priceRange: "₹5000 - ₹8000",
    ac: true,
    nonAc: false,
    amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
    freeAmenities: ["WiFi", "Parking", "Hot Water"],
    image: "./first.jpg",
  },
  {
    id: 2,
    type: "Girls",
    exclusive: true,
    verified: true,
    name: "Srinivasa Luxury Womens Pg",
    location: "Kondapur, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "10.45 KMS",
    price: "₹6500/Month",
    priceRange: "₹5000 - ₹8000",
    ac: false,
    nonAc: true,
    amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
    freeAmenities: ["WiFi", "Parking"],
    image: "/second.jpg",
  },
  {
    id: 3,
    type: "Boys",
    exclusive: true,
    verified: true,
    name: "AR LUXURY PG",
    location: "Madhapur, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "8.90 KMS",
    price: "₹8000/Month",
    priceRange: "₹8000 - ₹10000",
    ac: true,
    nonAc: false,
    amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
    freeAmenities: ["WiFi", "Parking", "Gym"],
    image: "/third.jpg",
  },
  {
    id: 4,
    type: "Boys",
    exclusive: false,
    verified: true,
    name: "Green Nest Boys PG",
    location: "Hitech City, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "9.50 KMS",
    price: "₹7500/Month",
    priceRange: "₹7000 - ₹9000",
    ac: true,
    nonAc: false,
    amenities: ["CCTV", "Security", "Food", "Laundry", "Gym"],
    freeAmenities: ["WiFi", "Parking", "Hot Water"],
    image: "/fourth.jpg",
  },
  {
    id: 5,
    type: "Girls",
    exclusive: true,
    verified: true,
    name: "Sunshine Ladies PG",
    location: "Banjara Hills, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "7.80 KMS",
    price: "₹8500/Month",
    priceRange: "₹8000 - ₹10000",
    ac: true,
    nonAc: false,
    amenities: ["CCTV", "Security", "Food", "Laundry", "TV"],
    freeAmenities: ["WiFi", "Parking", "Hot Water"],
    image: "/fifth.jpg",
  },
  {
    id: 6,
    type: "Boys",
    exclusive: false,
    verified: false,
    name: "Cozy Stay PG for Boys",
    location: "Ameerpet, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "11.20 KMS",
    price: "₹6000/Month",
    priceRange: "₹5000 - ₹7000",
    ac: false,
    nonAc: true,
    amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
    freeAmenities: ["WiFi", "Parking"],
    image: "/sixth.jpg",
  },

  {
    id: 7,
    name: "Sunrise PG",
    location: "Bangalore, Indiranagar",
    type: "Boys",
    price: "₹8000 - ₹12000",
    amenities: ["WiFi", "Parking", "Food", "Laundry"],
    verified: true,
    acAvailable: true,
    nonAcAvailable: false,
    image: "/seventh.jpg",
  },
  {
    id: 8,
    name: "Cozy Nest PG",
    location: "Hyderabad, Madhapur",
    type: "Girls",
    price: "₹6000 - ₹10000",
    amenities: ["WiFi", "Security", "Power Backup"],
    verified: false,
    acAvailable: false,
    nonAcAvailable: true,
    image: "/first.jpg",
  },
  {
    id: 9,
    name: "Elite Stay PG",
    location: "Pune, Hinjewadi",
    type: "Unisex",
    price: "₹9000 - ₹15000",
    amenities: ["WiFi", "Gym", "CCTV", "Food"],
    verified: true,
    acAvailable: true,
    nonAcAvailable: true,
    image: "/fourth.jpg",
  },
  {
    id: 10,
    type: "Boys",
    exclusive: true,
    verified: true,
    name: "AR LUXURY PG",
    location: "Madhapur, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "8.90 KMS",
    price: "₹8000/Month",
    priceRange: "₹8000 - ₹10000",
    ac: true,
    nonAc: false,
    amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
    freeAmenities: ["WiFi", "Parking", "Gym"],
    image: "/third.jpg",
  },
  {
    id: 11,
    type: "Boys",
    exclusive: false,
    verified: true,
    name: "Green Nest Boys PG",
    location: "Hitech City, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "9.50 KMS",
    price: "₹7500/Month",
    priceRange: "₹7000 - ₹9000",
    ac: true,
    nonAc: false,
    amenities: ["CCTV", "Security", "Food", "Laundry", "Gym"],
    freeAmenities: ["WiFi", "Parking", "Hot Water"],
    image: "/fourth.jpg",
  },
  {
    id: 12,
    type: "Girls",
    exclusive: true,
    verified: true,
    name: "Sunshine Ladies PG",
    location: "Banjara Hills, Hyderabad, Telangana, India",
    locationVerified: true,
    distance: "7.80 KMS",
    price: "₹8500/Month",
    priceRange: "₹8000 - ₹10000",
    ac: true,
    nonAc: false,
    amenities: ["CCTV", "Security", "Food", "Laundry", "TV"],
    freeAmenities: ["WiFi", "Parking", "Hot Water"],
    image: "/fifth.jpg",
  },
];




const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));
const ContactUs = lazy(() => import("./routes/ContactUs"));
const PageNotFound = lazy(() => import("./routes/PageNotFound"));
const UserLogin = lazy(() => import("./routes/UserLogin"));
const SpecificHostel = lazy(() => import("./routes/SpecificHostel"));
const AdminLogin = lazy(() => import("./routes/AdminLogin"));
const HostelListing = lazy(() => import("./routes/HostelListing"));
const UserRegistration = lazy(() => import("./routes/UserRegistration"));
function App() {
  return (
    <>
      <Suspense fallback={<LoadingUi />}>
        <Routes>
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/user-registration" element={<UserRegistration/>} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact-us"
            element={
              <>
                <Header />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route
            path="/hostel-listings"
            element={
              <>
                <Header />
                <HostelListing pgListings={pgListings}/>
                <Footer />
              </>
            }
          />
          <Route
            path="/admin-login"
            element={
              <>
                <AdminLogin />
              </>
            }
          />
          <Route
            path="/hostel-listings/:id"
            element={
              <>
                <Header />
                <SpecificHostel />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
