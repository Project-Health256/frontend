import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export function FAQCard() {
    return <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <AiOutlineQuestionCircle className="text-[5rem] pt-2 pl-2" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Frequntly Asked Questions</div>
            <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <button className="bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-full active:bg-[#FF99A8] focus:bg-[#FF99A8]">
                FAQ
            </button>
        </div>
    </div>;
}
