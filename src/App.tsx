import { Navbar } from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Index from "./components";
import Section6 from "./components/sections/section6";
import Section4 from "./components/sections/section4";
import Section3 from "./components/sections/section3";
import Section2 from "./components/sections/myWork";
import { Right } from "./components/right-side";
import { Left } from "./components/left-side";
import BlogPage from "./components/sections/blog";
import { NotFound } from "./components/notFound";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col  items-center pt-40 bg-black min-h-screen">
          <Navbar />
          {/* <div className="w-6xl bg-black text-white flex flex-row gap-[100px]">
            <Left /> */}
          <Routes>
            <Route
              path="/"
              element={
                <div className="w-6xl bg-black text-white flex flex-row gap-[100px]">
                  <Left />
                  <Right />
                </div>
              }
            />
            <Route
              path="/education"
              element={
                <div className="w-6xl bg-black text-white flex flex-row gap-[100px]">
                  <Left />
                  <div className="flex flex-col gap-20">
                    <Section2 />
                    <Section6 />
                  </div>
                </div>
              }
            />
            <Route
              path="/projects"
              element={
                <div className="w-6xl bg-black text-white flex flex-row gap-[100px]">
                  <Left />
                  <div className="flex flex-col gap-20">
                    <Section3 />
                    <Section6 />
                  </div>
                </div>
              }
            />
            <Route
              path="/tools"
              element={
                <div className="w-6xl bg-black text-white flex flex-row gap-[100px]">
                  <Left />
                  <div className="flex flex-col gap-20">
                    <Section4 />
                    <Section6 />
                  </div>
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="w-6xl bg-black text-white flex flex-row gap-[100px]">
                  <Left />
                  <Section6 />
                </div>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <div className="w-6xl bg-black text-white flex flex-row gap-[100px]">
                  <Left />
                  <div className="flex flex-col gap-20">
                    <BlogPage />
                    <Section6 />
                  </div>
                </div>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
        {/* </div> */}
      </Router>
    </>
  );
}

export default App;
