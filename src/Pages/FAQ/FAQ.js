import NavBar from "../../global-components/NavBar/Navbar";
import { FAQCardComponent } from "./components/FAQCardComponent";
import Header from "./Header";
import { quotes } from "./Quotes";
import Footer from "../../global-components/Footer/Footer";

export default function FAQ() {
  const QUOTE = quotes[Math.floor(Math.random() * quotes.length)];

  const TDEESummary =
    "Total Daily Energy Expenditure is referred to as TDEE (aka your maintenance calories). The total daily energy expenditure (TDEE), which takes into account all daily activities, is what is required to maintain body weight. It is computed by dividing your BMR (Basal Metabolic Rate), which is a component of your TDEE and the number of calories your body requires to function, by your level of activity. However, it is NOT the recommended calorie intake for weight loss or gain. Maintaining daily calorie intake contributes to keeping body weight constant. Whatever the case, knowing your TDEE is sufficient to keep track of your weight gain and decrease.";

  const foodPlateSummary = "";

  const featureSummary =
    "We aim to guide users on how to make wise decisions in their life via a TDEE (Total Daily Energy Expenditure). Users can use our TDEE calculator to determine their total daily maintenance calories and macronutrients. Additionally, those who have registered have access to charts that, by tracking their progress, give them a visual depiction of their weight-loss journey. Once logged in, a user can utilize our chart tool to establish a session with their initial weight and a goal to gain or lose weight at that time. They can then follow their success weekly by graphing their weight progress.";

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
            image="https://www.upvoty.com/wp-content/uploads/2020/09/features.png"
            topic="Utilizing our features"
            summary={featureSummary}
          />
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
}
