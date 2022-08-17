import { CalculatorCard } from "../Calculator/CalculatorCard";
import { FAQCard } from "../FAQ/FAQCard";
import { SignUpSection } from "../SignUp/SignUpSection";
import { AuthLandingPageTop } from "../../AuthPages/AuthLandingPageTop/AuthLandingPageTop";
import NavBar from "../../global-components/NavBar/Navbar";
import { useContext } from "react";
import AppContext from "../../context";

export function LandingPage() {
  const { isAuth } = useContext(AppContext);

  return (
    <>
      <NavBar />
      <br></br>
      {isAuth === false && <SignUpSection />}
      {isAuth === true && <AuthLandingPageTop />}
      <div className="flex justify-evenly pt-8 bg-[#e89c30] pb-8">
        <CalculatorCard />
        <FAQCard />
      </div>
    </>
  );
}
