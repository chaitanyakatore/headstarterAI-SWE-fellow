import React from "react";
import Home from "./components/Home";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default App;
