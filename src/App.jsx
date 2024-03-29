import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import "./index.css";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-between items-center gap-8 pt-28">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
