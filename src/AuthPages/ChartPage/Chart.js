import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { UserData } from "../../Data/Data";
import { DateTime } from "luxon";

export default function Chart({ chartWeightEntries }) {
  const chartModel = {
    labels: [],
    datasets: [
      {
        label: "Weight",
        data: [],
        backgroundColor: "#1E429F",
        borderColor: "#1E429F",
        borderWidth: 3,
        color: "#32efec",
      },
    ],
  };

  const [weightEntries, setWeightEntries] = useState(chartModel);

  useEffect(() => {
    const createdPoints = [
      ...chartWeightEntries.map((entries) =>
        DateTime.fromISO(entries.created_at).toFormat("dd-LLL-yyyy")
      ),
    ];
    const createdData = [
      ...chartWeightEntries.map((entries) => entries.weight_lbs),
    ];
    setWeightEntries({
      ...weightEntries,
      labels: createdPoints,
      datasets: chartModel.datasets.map((info) => ({
        ...info,
        data: createdData,
      })),
    });
  }, [chartWeightEntries]);

  return (
    <>
      <div
        class="block p-6 min-w-sm mb-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        X-Axis: Date 
        <br></br>
        Y-Axis: Weight (lbs)
        <Line data={weightEntries}  />
      </div>
    </>
  );
}
