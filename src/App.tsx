import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "./components/navbar";
import Footer from "./components/footer";
import Section6 from "./components/sections/section6";
import Section4 from "./components/sections/section4";
import Section3 from "./components/sections/section3";
import Section2 from "./components/sections/myWork";
import { Right } from "./components/right-side";
import { Left } from "./components/left-side";
import BlogPage from "./components/sections/blog";
import { NotFound } from "./components/notFound";

function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:gap-14 xl:gap-20">
      <Left />
      <main className="flex w-full min-w-0 flex-col gap-16 lg:gap-20">
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <div className="flex min-h-screen flex-col items-center bg-black pt-24 text-white sm:pt-28 lg:pt-40">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <PageShell>
                  <Right />
                </PageShell>
              }
            />
            <Route
              path="/education"
              element={
                <PageShell>
                  <Section2 />
                  <Section6 />
                </PageShell>
              }
            />
            <Route
              path="/projects"
              element={
                <PageShell>
                  <Section3 />
                  <Section6 />
                </PageShell>
              }
            />
            <Route
              path="/tools"
              element={
                <PageShell>
                  <Section4 />
                  <Section6 />
                </PageShell>
              }
            />
            <Route
              path="/contact"
              element={
                <PageShell>
                  <Section6 />
                </PageShell>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <PageShell>
                  <BlogPage />
                  <Section6 />
                </PageShell>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <Analytics />
    </>
  );
}

export default App;
