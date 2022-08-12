import React from 'react'

export default function ToggleSwitch({ label, text, color }) {
    return (
        <div>
            <label for={label} class="inline-flex relative items-center mb-4 cursor-pointer">
                <input type="checkbox" value="" id={label} class="sr-only peer" />
                    <div className={`w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:bg-salmonPink-900 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-${color}-600`}></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{text}</span>
            </label>
        </div>
    )
}

// "w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:bg-salmonPink-900 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>

