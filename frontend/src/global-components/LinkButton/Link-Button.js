// import React from "react";
import { Link } from "react-router-dom";
export function LinkButton({ pathName, text }) {
  return (
    <div className="px-6 pt-4 pb-2">
      <button type="button" className="bg-[#7066e0] hover:bg-[#655cc9] text-white font-bold py-2 px-4 rounded-full active:bg-[#7066e0] focus:ring-[#b7b2ef] LI-Mono">
        <Link to={pathName}>
          {text}
        </Link>
      </button>
    </div>
  )
}
