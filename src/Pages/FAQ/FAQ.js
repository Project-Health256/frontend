import NavBar from "../../global-components/NavBar/Navbar";
import { FAQCardComponent } from "./components/FAQCardComponent";
import Header from "./Header";
import { quotes } from "./Quotes";
import Footer from "../../global-components/Footer/Footer";

export default function FAQ() {
  const QUOTE = quotes[Math.floor(Math.random() * quotes.length)];

  const TDEESummary =
    "TDEE stands for Total Daily Energy Expenditure (aka your maintenance calories). TDEE is the total energy needed daily to maintain body weight after factoring in all activities after 24 hours. It is calculated by multiplying your BMR (Basal Metabolic Rate), BMR is a component of your TDEE and the amount of calories your body needs to continue to operate. But it is NOT the amount of calories you should eat to lose/gain weight. Keeping daily caloric intake helps maintain the same body weight. Be that as it may, figuring out your TDEE is enough to track a weight loss/gain journey.";

  return (
    <>
      <NavBar />
      <Header text={QUOTE} />
      <div className="mt-5 flex flex-col sm:flex-row sm:justify-evenly items-center">
        <div className="mb-5">
          <FAQCardComponent
            image="https://healthyeater.com/wp-content/uploads/2022/02/TDEE-New.jpg"
            topic="What is TDEE?"
            summary={TDEESummary}
          />
        </div>
        <div className="mb-5">
          <FAQCardComponent
            image="https://healthyeater.com/wp-content/uploads/2022/02/TDEE-New.jpg"
            topic="What is TDEE?"
            summary={TDEESummary}
          />
        </div>
        <div className="mb-5">
          <FAQCardComponent
            image="https://healthyeater.com/wp-content/uploads/2022/02/TDEE-New.jpg"
            topic="How to use"
            summary={TDEESummary}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
