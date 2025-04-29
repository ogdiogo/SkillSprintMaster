import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TodaysLesson from "@/components/TodaysLesson";
import SkillCarousel from "@/components/SkillCarousel";
import NewsSection from "@/components/NewsSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SkillBite - 5-Minute Daily Learning for Remote Workers</title>
        <meta name="description" content="Learn new skills in just 5 minutes a day with SkillBite. Perfect for remote workers who want to grow professionally." />
      </Helmet>
      
      <HeroSection />
      <FeaturesSection />
      <TodaysLesson />
      <SkillCarousel />
      <NewsSection />
    </>
  );
};

export default Home;
