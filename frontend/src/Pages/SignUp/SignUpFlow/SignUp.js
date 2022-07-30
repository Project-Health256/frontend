import React from 'react';
import Button from '../components/Button';
import { InputTextForm } from '../components/InputTextForm';

export default function SignUp() {
  return (
    <div className="bg-sunray-500 p-10">
      <h1 className="text-white font-bold text-center text-5xl">Get Started</h1>
      <h3 className="text-white font-bold text-center mt-4">Already have an account? <span className="text-black">Log In</span></h3>
      <InputTextForm text="Name" />
      <InputTextForm text="Email" />
      <InputTextForm text="Username" />
      <InputTextForm text="Password" />
      <Button text="Sign Up" />
    </div>
  )
}
