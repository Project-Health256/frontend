import React from "react";

export function SignUpSection() {
  return <header>
    <div className="text-center bg-[#efb86c] text-gray-800 py-20 px-6 pt-16">
      <h1 className="text-5xl font-bold mt-0 mb-6 font-mono">Project Health</h1>
      <h3 className="text-2xl font-bold mb-8">Click Below to Sign Up</h3>

      <a href="https://www.google.com/" className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-800 hover:shadow-lg focus:bg-[#FF99A8] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#FF99A8] active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" role="button">Sign Up</a>
      {
        /* <a href="/" className="bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-full focus:bg-[#FF99A8] active:bg-[#FF99A8]">Sign Up</a> */
      }
    </div>
  </header>;
}
