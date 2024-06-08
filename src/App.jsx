import { Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import CertificatesPage from "./pages/CertificatesPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ThankYouPage from "./pages/ThankYouPage";
import ErrorPage from "./pages/ErrorPage";
import FormErrorPage from "./pages/FormErrorPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="certificates" element={<CertificatesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="form-error" element={<FormErrorPage />} />
          <Route path="thanks" element={<ThankYouPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
