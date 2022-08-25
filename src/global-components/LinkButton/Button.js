import React from 'react'

export default function Button({ text }) {
  return (
    <div className="px-6 pt-4 pb-2">
      <button className="hover:bg-[#655cc9] text-white font-bold py-2 px-4 rounded-full bg-[#7066e0] focus:ring-[#b7b2ef] LI-Mono">{text}</button>
    </div>
  )
}
