import { CalculatorPage } from './Pages/Calculator/CalculatorPage/CalculatorPage';
import { LandingPage } from './Pages/LandingPage/LandingPage';
import { Routes, Route } from "react-router-dom";
import { ChartPage } from './AuthPages/ChartPage/ChartPage';
import FAQ from './Pages/FAQ/FAQ';
import SignUp from './Pages/SignUp/SignUpFlow/SignUp'
import FoodPlate from './Pages/FAQ/components/Charts';
import LoginPage from './Pages/Login/LoginPage';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='calculator' element={<CalculatorPage />} />
        <Route path='faq' element={<FAQ />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='faq/foodplate' element={<FoodPlate />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='chart' element={<ChartPage />} />
      </Routes>
    </div>
  );
}

export default App;
