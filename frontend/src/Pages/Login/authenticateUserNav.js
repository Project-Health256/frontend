import React from 'react'

export default function AuthenticateUserNav() {
    return (
        <nav class="flex items-center justify-end bg-blueRYB-200 p-6">
            {/* Profile Icon */}
            <h1 className="mr-4 text-2xl">Welcome back, Jason Padilla</h1>
            <div class="inline-flex overflow-hidden relative justify-center items-center w-12 h-12 bg-salmonPink-400 rounded-full dark:bg-gray-600">
                <span class="font-medium text-white dark:text-gray-300">JP</span>
            </div>

        </nav>
    )
}
