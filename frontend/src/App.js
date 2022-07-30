import { Calculator } from './Pages/Calculator/Calculator';
import { LandingPage }  from './Pages/LandingPage/LandingPage';
import {Routes, Route} from "react-router-dom";
import FAQ from './Pages/FAQ/FAQ';
import SignUp from './Pages/SignUp/SignUpFlow/SignUp'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='calculator' element={<Calculator/>}/>
        <Route path='faq' element={<FAQ />}/>
        <Route path='signup' element={<SignUp />}/>
        {/* <Route/> */}
      </Routes>
    </div>
  );
}

export default App;
