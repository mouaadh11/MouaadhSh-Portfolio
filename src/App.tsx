import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, type ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "./components/navbar";
import Footer from "./components/footer";
import ContactSection from "./components/sections/ContactSection";
import ToolsSection from "./components/sections/ToolsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import EducationSection from "./components/sections/EducationSection";
import { Right } from "./components/RightSide";
import { Left } from "./components/LeftSide";
import BlogPage from "./components/sections/blog";
import { NotFound } from "./components/notFound";
import { AuthProvider } from "./contexts/AuthContext";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import ErrorPage from "./components/ui/ErrorPage";
import { firebaseInitError } from "@/lib/firebase";

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

function PublicChrome({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black pt-24 text-white sm:pt-28 lg:pt-40">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: "auto" });
  }, [pathname, search]);

  return null;
}

function App() {
  if (firebaseInitError) {
    return (
      <>
        <Toaster />
        <AuthProvider>
          <Router>
            <ScrollToTop />
            <div className="flex min-h-screen flex-col items-center bg-black pt-24 text-white sm:pt-28 lg:pt-40">
              <Navbar />
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:gap-14 xl:gap-20">
                <ErrorPage code={firebaseInitError.code} message={firebaseInitError.message} onRetry={() => window.location.reload()} />
              </div>
              <Footer />
            </div>
          </Router>
        </AuthProvider>
        <Analytics />
      </>
    );
  }

  return (
    <>
      <Toaster />
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <PublicChrome>
                  <PageShell>
                    <Right />
                  </PageShell>
                </PublicChrome>
              }
            />
            <Route
              path="/education"
              element={
                <PublicChrome>
                  <PageShell>
                    <EducationSection />
                    <ContactSection />
                  </PageShell>
                </PublicChrome>
              }
            />
            <Route
              path="/projects"
              element={
                <PublicChrome>
                  <PageShell>
                    <ProjectsSection />
                    <ContactSection />
                  </PageShell>
                </PublicChrome>
              }
            />
            <Route
              path="/tools"
              element={
                <PublicChrome>
                  <PageShell>
                    <ToolsSection />
                    <ContactSection />
                  </PageShell>
                </PublicChrome>
              }
            />
            <Route
              path="/contact"
              element={
                <PublicChrome>
                  <PageShell>
                    <ContactSection />
                  </PageShell>
                </PublicChrome>
              }
            />
            <Route
              path="/blog/:id"
              element={
                <PublicChrome>
                  <PageShell>
                    <BlogPage />
                    <ContactSection />
                  </PageShell>
                </PublicChrome>
              }
            />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="*"
              element={
                <PublicChrome>
                  <NotFound />
                </PublicChrome>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
      <Analytics />
    </>
  );
}

export default App;
