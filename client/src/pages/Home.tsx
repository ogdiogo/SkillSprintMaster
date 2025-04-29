import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import NewsSection from "@/components/NewsSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>FinanceBanco - Soluções Bancárias Personalizadas</title>
        <meta name="description" content="FinanceBanco oferece soluções bancárias personalizadas com segurança e excelência para indivíduos e empresas." />
      </Helmet>
      
      <HeroSection />
      <FeaturesSection />
      <NewsSection />
    </>
  );
};

export default Home;
