import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCalculator } from "react-icons/ai";
import { LinkButton } from "../../components/LinkButton/Link-Button";

export function CalculatorCard() {
  return <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white pb-4">
    <AiOutlineCalculator className="text-[5rem] pt-2 pl-2" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">Calculator</div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <LinkButton pathName="/calculator" text="Calculator"/>
  </div>;
}
