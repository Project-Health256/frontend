import { CalculatorCard } from "../Calculator/CalculatorCard";
import { FAQCard } from "../FAQ/FAQCard";
import { SignUpSection } from "../SignUp/SignUpSection";
import { AuthLandingPageTop } from "../../AuthPages/AuthLandingPageTop/AuthLandingPageTop";
import NavBar from "../../global-components/NavBar/Navbar";
import Footer from "../../global-components/Footer/Footer";
import { useContext } from "react";
import AppContext from "../../context";

export function LandingPage() {
  const { isAuth } = useContext(AppContext);

  return (
    <>
      <NavBar />
      <br></br>
      {!isAuth && <SignUpSection />}
      {isAuth && <AuthLandingPageTop />}
      <div className="flex flex-col sm:flex-row items-center md:flex-row lg:flex-row sm:justify-evenly pt-8 pb-8">
        <CalculatorCard />
        <FAQCard />
      </div>
      <br></br>
      <Footer />
    </>
  );
}
