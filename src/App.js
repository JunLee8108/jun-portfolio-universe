import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Blog from "./pages/blog/Blog";
import BlogDetail from "./pages/blogDetail/BlogDetail";
import BlogWrite from "./pages/blogWrite/BlogWrite";
import BlogEdit from "./pages/blogEdit/BlogEdit";
import Contact from "./pages/contact/Contact";
import Page404 from "./components/Page404";

import { Routes, Route } from "react-router-dom";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/write" element={<BlogWrite />} />
        <Route path="/edit/:id" element={<BlogEdit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
library.add(fab, fas, far);
