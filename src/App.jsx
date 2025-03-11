import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";
import LoadingUi from "./components/LoadingUi";
{
  /*Lazy loading for the respective routes */
}
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
                <HostelListing />
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
