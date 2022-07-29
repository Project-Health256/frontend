import { Calculator } from './components/Calculator/Calculator';
import { LandingPage }  from './components/LandingPage/LandingPage';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='calculator' element={<Calculator/>}/>
        {/* <Route/> */}
      </Routes>
    </div>
  );
}

export default App;
