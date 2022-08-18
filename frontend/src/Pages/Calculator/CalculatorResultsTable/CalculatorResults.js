export function CalculatorResults(obj) {
    console.log(obj.props.bmr)
  return (
    <div className="overflow-x-auto relative rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="flex justify-center">
            <th scope="col" className="py-3 px-6 mx-auto">
            </th>
          </tr>
          <th scope="col" className="py-3 px-6 mx-auto">
              Results
            </th>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Your BMR is:
            </th>
            <td className="py-4 px-6">{obj.props.bmr} calories</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Your TDEE is:
            </th>
            <td className="py-4 px-6">{obj.props.tdee} calories</td>
            
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Daily Calories:
            </th>
            <td className="py-4 px-6">{obj.props.calories} calories</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Estimated:
            </th>
            <td className="py-4 px-6">{obj.props.estimatedProgress} lbs per week</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Daily Protein:
            </th>
            <td className="py-4 px-6">Protein: {obj.props.protein}g</td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Daily Fats:
            </th>
            <td className="py-4 px-6">Fats: {obj.props.fats}g</td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Daily Carbs:
            </th>
            <td className="py-4 px-6">Carbs: {obj.props.carbs}g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

