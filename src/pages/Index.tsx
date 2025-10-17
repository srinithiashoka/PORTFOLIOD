import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import SocialLinks from "@/components/SocialLinks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <SocialLinks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
