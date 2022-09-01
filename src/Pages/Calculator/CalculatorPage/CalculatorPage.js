import React from "react";
import { Calculator } from "../Calculator";
import NavBar from "../../../global-components/NavBar/Navbar";
import Footer from "../../../global-components/Footer/Footer";

export function CalculatorPage() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center mt-5">
        <div>
          <Calculator />
        </div>
      </div>
      <br></br>
      <Footer />
    </>
  );
}
