import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import ProjectsSection from "./components/ProjectsSection";
import About from "./components/About";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import LoadingScreen from "./components/LoadingScreen";

const HomePage = () => {
  return (
    <>
      <Home />
      <div id="projects">
        <ProjectsSection />
      </div>
    </>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <div>
        {isLoading ? (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        ) : (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
