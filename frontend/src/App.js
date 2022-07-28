import Calculator from "./components/Calculator/Calculator";
import FAQ from "./components/FAQ/FAQ";
import SignUp from "./components/SignUp/SignUp";
import { AiOutlineCalculator, AiOutlineQuestionCircle } from "react-icons/ai"

function App() {
  return (
    <div>
      {/* Sign Up Section */}
      <header>
        <div class="text-center bg-[#efb86c] text-gray-800 py-20 px-6 pt-16">
          <h1 class="text-5xl font-bold mt-0 mb-6 font-mono">Project Health</h1>
          <h3 class="text-2xl font-bold mb-8">Click Below to Sign Up</h3>
          <a class="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-800 hover:shadow-lg focus:bg-[#FF99A8] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#FF99A8] active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Sign Up</a>
        </div>
      </header>
      {/* Calcuator Card */}
      <div class="flex justify-evenly pt-8 bg-[#e89c30] pb-8">
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white pb-4">
        <AiOutlineCalculator class="text-[5rem] pt-2 pl-2"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Calcuator</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <button class="bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-full focus:bg-[#FF99A8] active:bg-[#FF99A8]">
            Calcuator
          </button>
        </div>
      </div>
      {/* FAQ Card */}
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <AiOutlineQuestionCircle class="text-[5rem] pt-2 pl-2"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Frequntly Asked Questions</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
        <button class="bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-full active:bg-[#FF99A8] focus:bg-[#FF99A8]">
            FAQ
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
