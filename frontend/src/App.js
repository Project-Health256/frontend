import { CalculatorCard } from './components/Calculator/CalculatorCard';
import { FAQCard } from './components/FAQ/FAQCard';
import { SignUpSection } from './components/SignUp/SignUpSection';

function App() {
  return (
    <div>
      <SignUpSection />
      {/* Cards */}
      <div className="flex justify-evenly pt-8 bg-[#e89c30] pb-8">
        <CalculatorCard />
        <FAQCard />
      </div>
    </div>
  );
}

export default App;
