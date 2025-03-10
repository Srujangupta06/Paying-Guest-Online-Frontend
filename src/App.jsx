import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";
import LoadingUi from "./components/LoadingUi";
import HostelListing from "./routes/HostelListing";
import AdminLogin from "./routes/AdminLogin";
import UserLogin from "./routes/UserLogin";
import SpecificHostel from "./routes/SpecificHostel";

{
  /*Lazy loading for the respective routes */
}
const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));
const ContactUs = lazy(() => import("./routes/ContactUs"));
const PageNotFound = lazy(() => import("./routes/PageNotFound"));
function App() {
  return (
    <>
      <Suspense fallback={<LoadingUi />}>
        <Routes>
          <Route path="/user-login" element={<UserLogin />} />
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
                <Header />
                <AdminLogin />
                <Footer />
              </>
            }
          />
          <Route
            path="/hostel-listings/:id"
            element={
              <>
                <Header />
                <SpecificHostel/>
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
