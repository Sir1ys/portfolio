import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main className="h-screen flex flex-col justify-between">
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
