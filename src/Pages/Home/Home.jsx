import Header from "../../Components/Header/Header";
import HeroSection from "../../Components/HeroSection/HeroSection";
import WelcomeSection from "./../../Components/WelcomeSection/WelcomeSection";
import CalculationSection from "./../../Components/CalculationSection/CalculationSection";
import BlossomingSection from "./../../Components/BlossomingSection/BlossomingSection";
import ProgramSection from "./../../Components/ProgramSection/ProgramSection";
import LearningSection from "./../../Components/LearningSection/LearningSection";
import RegistrationSection from "./../../Components/RegistrationSection/RegistrationSection";
import FooterSection from "../../Components/FooterSection/FooterSection";
const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WelcomeSection />
      <CalculationSection />
      <BlossomingSection />
      <ProgramSection />
      <LearningSection />
      <RegistrationSection />
      <FooterSection />
    </>
  );
};

export default Home;
