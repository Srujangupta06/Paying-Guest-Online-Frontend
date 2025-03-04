import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ContactUs from "./routes/ContactUs";
import About from "./routes/About";
import PageNotFound from "./routes/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
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
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
