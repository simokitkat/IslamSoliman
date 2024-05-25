import { Route, Routes, useLocation } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
// import { AnimatePresence } from "framer-motion";
import CertificatesPage from "./pages/CertificatesPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ThankYouPage from "./pages/ThankYouPage";
import ErrorPage from "./pages/ErrorPage";
import FormError from "./pages/FormError";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="certificates" element={<CertificatesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="form-error" element={<FormError />} />
          <Route path="thanks" element={<ThankYouPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
