import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import BenefitsPage from "./pages/BenefitsPage";
import WelcomePage from "./pages/WelcomePage";
import Layout from "./components/BaseLayout/Layout";
import VerificationPage from "./pages/VerificationPage";
import CreateAccountPage from "./pages/CreateAccountPage";

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/verification" element={<VerificationPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}
