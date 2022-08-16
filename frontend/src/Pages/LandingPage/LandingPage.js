import { CalculatorCard } from "../Calculator/CalculatorCard";
import { FAQCard } from "../FAQ/FAQCard";
import { SignUpSection } from "../SignUp/SignUpSection";
import NavBar from "../../global-components/NavBar/Navbar";
export function LandingPage() {
  return (
    <>
      <NavBar/>
      <br></br>
      <SignUpSection />
      <div className="flex justify-evenly pt-8 bg-[#e89c30] pb-8">
        <CalculatorCard />
        <FAQCard />
      </div>
    </>
  );
}

