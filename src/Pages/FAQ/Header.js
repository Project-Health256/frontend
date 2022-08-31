import React from 'react'

export default function Header({text}) {
  return <h1 className="italic LI-UI ls text-2xl text-center mt-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-4">"{text}"</h1>
}
