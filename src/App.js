import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
