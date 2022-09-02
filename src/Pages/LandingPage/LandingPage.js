import { CalculatorCard } from "../Calculator/CalculatorCard";
import { FAQCard } from "../FAQ/FAQCard";
import { SignUpSection } from "../SignUp/SignUpSection";
import { AuthLandingPageTop } from "../../AuthPages/AuthLandingPageTop/AuthLandingPageTop";
import NavBar from "../../global-components/NavBar/Navbar";
import Footer from "../../global-components/Footer/Footer";
import { useContext } from "react";
import AppContext from "../../context";

export function LandingPage() {
  const {isAuth} = useContext(AppContext);
  return (
    <>
      <NavBar />
      {!isAuth && !window.localStorage.getItem("token") && <SignUpSection />}
      {window.localStorage.getItem("token") && <AuthLandingPageTop />}
      <div className="flex flex-col space-y-4 sm:flex-col items-center md:flex-col lg:flex-row sm:justify-evenly pt-8 pb-8">
        <CalculatorCard />
        <FAQCard />
      </div>
      <br></br>
      <Footer />
    </>
  );
}
