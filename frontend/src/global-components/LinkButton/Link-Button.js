// import React from "react";
import { Link } from "react-router-dom";
export function LinkButton({ pathName, text }) {
  return (
    <div className="px-6 pt-4 pb-2">
      <button type="button" className="bg-black hover:bg-[#FF99A8] text-white font-bold py-2 px-4 rounded-full active:bg-[#FF99A8] focus:bg-[#FF99A8] LI-Mono">
        <Link to={pathName}>
          {text}
        </Link>
      </button>
    </div>
  )
}
