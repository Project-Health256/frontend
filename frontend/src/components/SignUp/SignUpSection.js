import React from "react";
import { Link } from "react-router-dom";

export function SignUpSection() {
  return <header>
    <div className="text-center bg-[#efb86c] text-gray-800 py-20 px-6 pt-16">
      <h1 className="text-5xl font-bold mt-0 mb-6 font-mono">Project Health</h1>
      <h3 className="text-2xl font-bold mb-8">Click Below to Sign Up</h3>

      <button className="bg-black hover:bg-[#FF99A8] text-white font-bold py-2 px-4 rounded-full active:bg-[#FF99A8] focus:bg-[#FF99A8]">
            <Link to='/signup'>
          Sign Up
        </Link>
            </button>
    </div>
  </header>;
}
