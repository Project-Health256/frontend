import React from 'react'

export default function InputNumberForm({ text }) {
  return (
    <div className="relative z-0 mb-6 w-full group">
      <input type="number" name="repeat_password" className="block py-2.5 px-0 w-[10em] text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" "
        required="" />
        
      <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{text}</label>
    </div>
  )
}
