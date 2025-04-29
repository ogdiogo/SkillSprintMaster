import AboutSection from "@/components/AboutSection";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós - SkillBite</title>
        <meta name="description" content="Learn about SkillBite's mission to transform professional learning for remote workers." />
      </Helmet>
      
      <AboutSection />
    </>
  );
};

export default About;
