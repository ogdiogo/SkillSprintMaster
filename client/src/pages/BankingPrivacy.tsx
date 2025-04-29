import BankingPrivacyContent from "@/components/BankingPrivacy";
import { Helmet } from "react-helmet";

const BankingPrivacy = () => {
  return (
    <>
      <Helmet>
        <title>Sigilo Bancário - SkillBite</title>
        <meta name="description" content="Our commitment to protecting your financial information at SkillBite." />
      </Helmet>
      
      <BankingPrivacyContent />
    </>
  );
};

export default BankingPrivacy;
