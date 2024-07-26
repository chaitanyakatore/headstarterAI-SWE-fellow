import React from "react";
import Home from "./components/Home";
import "./index.css";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <ProjectsSection />
    </div>
  );
};

export default App;
