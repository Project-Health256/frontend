import { Calculator } from './components/Calculator/Calculator';
import { LandingPage }  from './components/LandingPage/LandingPage';
import {Routes, Route} from "react-router-dom";
import FAQ from './components/FAQ/FAQ';
import SignUp from './components/SignUp/SignUp'

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
