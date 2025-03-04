import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ContactUs from "./routes/ContactUs";
import About from "./routes/About";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
