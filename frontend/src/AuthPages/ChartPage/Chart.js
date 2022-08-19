import { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { UserData } from '../../Data/Data'

export default function Chart({ session }) {
  const [weightEntries, setWeightEntries] = useState([])
  const [isChartActive, setIsChartActive] = useState(true)

  const options = {
    plugins: {
      title: {
        display: true,
        text: "User's Weight Entries"
      }
    }
  }


  function UpdateUserEntries(event) {
    event.preventDefault();

    const updatedWeightEntries = Number(event.target.weightEntries.value);

    const newEntry = {
      "weight_lbs": updatedWeightEntries,
      "userStartingMetrics": session
    }
    fetch(`http://localhost:8000/weight-entries/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntry)
    })
  }


  function renderChart() {
    setIsChartActive(e => !e)
  }

  useEffect(() => {
    if (isChartActive === true) {
      console.log('Chart has been active')
      fetch(`http://localhost:8000/weight-entries/${session}`)
      .then(res => res.json())
      .then(data => setWeightEntries({
        labels: data.map(data => data.created_at),
        datasets: [
          {
            label: "Losing Weight",
            data: data.map(data => data.weight_lbs),
            backgroundColor: "#FF3355",
            borderColor: "#4747FF",
            borderWidth: 3,
            color: "red",
          },
        ],
      }))
    } else {
      console.log('Chart is no longer available')
      setWeightEntries([])
    }
  }, [session, isChartActive])

  console.log('weightEntries',  weightEntries)


  console.log(`Is Active:`, isChartActive)

  return (
    <>
      <button className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded" onClick={renderChart}>Display Chart</button>
{/* As of now, if left off when page is loaded, will break the component */}
      <Line data={weightEntries} options={options} />

      <form onSubmit={UpdateUserEntries}>
        <div class="w-1/2 md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='weight-entries'>
            Weight Entries
          </label>
          <input class="appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id='weightEntries' type="float" />
        </div>
        <button className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded" id="btn-submit">Update Chart</button>
      </form>
    </>
  )
}
