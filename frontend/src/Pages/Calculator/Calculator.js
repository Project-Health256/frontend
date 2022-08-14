import React from "react";
import { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import {LinkButton} from '../../global-components/LinkButton/Link-Button'
import Charts from "../FAQ/components/Charts";
import { CalculatorResults } from "./CalculatorResultsTable/CalculatorResults";

export function Calculator() {
  const [bmr, setBmr] = useState(0);
  const [tdee, setTdee] = useState(0);
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fats, setFats] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [estimatedProgress, setEstimatedProgress] = useState(0);

  
  function calculateBMR({age, weight, height, gender, alevel, goal}) {
    let bmrCalculations = 0;
    const mifflinStJeorEquationInLbIn = (4.536 * weight) + (15.88 * height) - (5 * age);
    if (gender === 'male') bmrCalculations = mifflinStJeorEquationInLbIn + 5;
    else bmrCalculations = mifflinStJeorEquationInLbIn - 161;
    let tdeeCalculations = Math.round(bmrCalculations * alevel);
    setBmr(Math.round(bmrCalculations));
    calculateTDEE(bmrCalculations, alevel);
    calculateCalories(goal, weight, tdeeCalculations);
  };

  function calculateTDEE(bmrCalculations, alevel) {
    setTdee(Math.round(bmrCalculations * alevel));
  };

  function calculateCalories(goal, weight, tdeeCalculations) {
    let percentage = Math.abs(goal / 100);
    let calorieCount = 0;
    goal < 0 ? calorieCount = Math.round(tdeeCalculations - (tdeeCalculations * percentage)) : calorieCount = Math.round(tdeeCalculations + (tdeeCalculations * percentage));
    setCalories(calorieCount);
    calculateMacros(weight, calorieCount);
  };

  function calculateMacros(weight, calorieCount) {
    let proteinCalories = weight * 4;
    let fatsCalories = (weight / 2) * 9;
    setCarbs((calorieCount - proteinCalories - fatsCalories) / 4);
    setProtein(weight);
    setFats(weight / 2);
  };

  function calculateWeightProgressEstimation(goal) {
    if (+goal === -20) setEstimatedProgress(-1);
    else if (+goal === -10) setEstimatedProgress(-0.50);
    else if (+goal === 0) setEstimatedProgress(0);
    else if (+goal === 10) setEstimatedProgress(0.50);
    else setEstimatedProgress(1);
  };

  const calculationDataSet = {bmr, tdee, calories, protein, fats, carbs, estimatedProgress};
  // console.log(calculationDataSet)
  // console.log('bmr: ', bmr);
  // console.log('tdee: ', tdee);
  // console.log('calories: ', calories);
  // console.log('protein: ', protein);
  // console.log('fats: ', fats);
  // console.log('carbs: ', carbs);
  // console.log('estimated progress: ', estimatedProgress + " lbs per week");
  
  return (
    <>
      <div className="md:container md:mx-auto">
      <LinkButton pathName="/" text="Home" />
        <div className="flex justify-center">Calorie & Macro Calculator</div>
        <Formik
          initialValues={{
            age: 21,
            weight: 180,
            height: 66,
            gender: 'male',
            alevel: 1.2,
            goal: -20,
          }}
          onSubmit={(values) => {
            calculateBMR(values);
            calculateWeightProgressEstimation(values.goal);
          }}
        >
          <Form className="mt-3">
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
              <div className="relative z-0 mb-6 w-full group">
                <Field
                  type="number"
                  name="age"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </Form>
        </Formik>
        <br />
        <CalculatorResults props={calculationDataSet}/>
        <br />
        <br />
        <Charts />
      </div>
    </>
  );
}
