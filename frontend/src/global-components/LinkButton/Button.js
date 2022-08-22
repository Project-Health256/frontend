import React from 'react'

export default function Button({ text }) {
  return (
    <div className="px-6 pt-4 pb-2">
      <button className="bg-white hover:bg-[#FF99A8] text-black font-bold py-2 px-4 rounded-full active:bg-[#FF99A8] focus:bg-[#FF99A8] LI-Mono">{text}</button>
    </div>
  )
}
