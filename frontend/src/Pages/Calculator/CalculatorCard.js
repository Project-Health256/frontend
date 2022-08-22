import React from "react";
import { AiOutlineCalculator } from "react-icons/ai";
import { LinkButton } from "../../global-components/LinkButton/Link-Button";

export function CalculatorCard() {
  return <div className="max-w-sm shadow-2xl rounded overflow-hidden shadow-lg bg-white pb-4">
    <AiOutlineCalculator className="text-[5rem] pt-2 pl-2" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Calculator</div>
      <p className="text-gray-700 text-base">
      Click below to access our calculator to calculate your BMI
      </p>
    </div>
    <LinkButton pathName="/calculator" text="Calculator"/>
  </div>;
}
