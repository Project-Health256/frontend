import React from "react";
import { useState } from "react";
import { Formik, Field, Form } from "formik";

export function Calculator() {
  const [bmr, setBMR] = useState(0);
  const [tdee, setTdee] = useState(0);

  function calculateBMR ({age, weight, height, gender, alevel, goal, units}) {
    let calculation = 0;
    if (gender === 'male') {
      if (units === 'imperial') calculation = 66.47 + (6.24 * weight) + (12.7 * height) - (6.75 * age);
      else calculation = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);
    } else {
      if (units === 'imperial') calculation = 65.51 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
      else calculation = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
    }
    setBMR(Math.round(calculation));
    setTdee(Math.round(calculation * alevel));
  }
  
  return (
    <div className="bg-sunray-500 p-10">
      <div className="md:container md:mx-auto">
        <div className="flex justify-center text-white font-bold text-center text-5xl">
          Calorie & Macro Calculator
        </div>
        <Formik
          initialValues={{
            age: 21,
            weight: 185,
            height: 60,
            gender: 'male',
            alevel: 1.2,
            goal: -20,
            units: 'imperial'
          }}
          onSubmit={(values) => {
            calculateBMR(values)
          }}
        >
          <Form className="mt-5">
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
              <div className="relative z-0 mb-6 w-full group">
                <Field
                  type="number"
                  name="age"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Age
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <Field
                  type="number"
                  name="weight"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Weight (lb)
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <Field
                  type="number"
                  name="height"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Height (in)
                </label>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 mb-6 w-full group">
                  <Field
                    as="select"
                    name="gender"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Field>
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Gender
                  </label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <Field
                    as="select"
                    name="alevel"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  >
                    <option value="1.2">Sedentary</option>
                    <option value="1.375">Lightly Active</option>
                    <option value="1.55">Moderately Active</option>
                    <option value="1.725">Very Active</option>
                    <option value="1.9">Extremely Active</option>
                  </Field>
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Activity Level
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 mb-6 w-full group">
                  <Field
                    as="select"
                    name="goal"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  >
                    <option value="-20">Lose Weight (-20%)</option>
                    <option value="-10">Slowly Lose Weight (-10%)</option>
                    <option value="0">Maintain Weight (0%)</option>
                    <option value="10">Slowly Gain Weight (+10%)</option>
                    <option value="20">Gain Weight (+20%)</option>
                  </Field>
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Goal
                  </label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <Field
                    as="select"
                    name="units"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  >
                    <option value="imperial">Imperial (lb, in)</option>
                    <option value="metric">Metric (kg, cm)</option>
                  </Field>
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Units
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-black hover:bg-[#FF99A8] text-white font-bold py-2 px-4 rounded-full active:bg-[#FF99A8] focus:bg-[#FF99A8]"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
