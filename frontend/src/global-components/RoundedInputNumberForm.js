import React from 'react'

export default function RoundedInputNumberForm({ text, id }) {
    return (

        <div class="w-1/2 md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for={id}>
                {text}
            </label>
            <input class="appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id={id} type="number" placeholder="90210" />
        </div>



    )
}
