import React from "react";
import { LinkButton } from "../../global-components/LinkButton/Link-Button";

export function SignUpSection() {
  return <header>
    <div className="text-center bg-[#efb86c] text-gray-800 py-20 px-6 pt-16">
      <h1 className="text-5xl font-bold mt-0 mb-6 font-mono">Project Health</h1>
      <h3 className="text-2xl font-bold mb-8">Click Below to Sign Up</h3>
      <LinkButton pathName="/signup" text="Sign Up" />
    </div>
  </header>;
}
