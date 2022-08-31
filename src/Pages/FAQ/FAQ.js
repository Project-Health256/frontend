import NavBar from "../../global-components/NavBar/Navbar";
import { FAQCardComponent } from "./components/FAQCardComponent";
import Header from "./Header";
import { quotes } from "./Quotes";
import Footer from "../../global-components/Footer/Footer";

export default function FAQ() {
  const QUOTE = quotes[Math.floor(Math.random() * quotes.length)];

  const TDEESummary =
    "TDEE stands for Total Daily Energy Expenditure (aka your maintenance calories). TDEE is the total energy needed daily to maintain body weight after factoring in all activities after 24 hours. It is calculated by multiplying your BMR (Basal Metabolic Rate), BMR is a component of your TDEE and the amount of calories your body needs to continue to operate. But it is NOT the amount of calories you should eat to lose/gain weight. Keeping daily caloric intake helps maintain the same body weight. Be that as it may, figuring out your TDEE is enough to track a weight loss/gain journey.";

    const foodPlateSummary = `People tend to forget a vital component in their journey and think calisthenics and weight training is the only aspect of it. An essential component of someone's weight journey is their food intake. A well-balanced diet consists of fruits, grains, vegetables, protein, dairy, and lots of water to maintain calorie consumption and a healthy body. Nevertheless, even with this information, it is still overwhelming to learn what food to eat and how much of it to consume. The article below will provide a starting point in learning about your food plate.`

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
            image="https://i.pinimg.com/originals/6f/38/4c/6f384c8f945dca352fdf4cc9b09d3b30.png"
            topic="Food Plate"
            summary={foodPlateSummary}
            link="https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/"
            linkText="More Information"
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
