import { InputTextForm } from '../components/InputTextForm';
import React from 'react'
import Button from '../components/Button';
import InputNumberForm from '../components/InputNumberForm';
import InputCheckBoxForm from '../components/InputCheckBoxForm';

export default function SignUp() {
  return (
    <div className="bg-sunray-500 p-10">
      <h1 className="text-white font-bold text-center text-5xl">Get Started</h1>
      <h3 className="text-white font-bold text-center mt-4">Already have an account? <span className="text-black">Log In</span></h3>
      <InputTextForm text="Name" />
      <InputTextForm text="Email" />
      <InputTextForm text="Username" />
      <InputTextForm text="Password" />
      <InputNumberForm text="Height (in)" />
      <InputNumberForm text="Weight (lbs)" />
      <InputCheckBoxForm text="Male" />
      <InputCheckBoxForm text="Female" />
      <Button text="Sign Up" />
    </div>
  )
}
