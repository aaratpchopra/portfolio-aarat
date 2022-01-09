import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProblemPage from "./pages/ProblemPage";
import ProblemsPage from "./pages/ProblemsPage";
import ProjectsPage from "./pages/ProjectsPage";

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/problems/:slug" element={<ProblemPage />} />
        <Route path="/problems" element={<ProblemsPage />} />
      </Routes>
    </div>
  );
};

export default App;
