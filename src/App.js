import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const isData = [
  {
    backgroundColor: "rgb(241 190 66)",
    borderColor: "rgb(241 190 66)",
    data: [0, 121, 101, 72, 93, 44, 63, 0, 23],
    label: "Short",
  }];

function App() {
  const data = {
    labels: ["Атак", "Ашан", "Ашан-Сити", "Гиперглобус", "Конвент", "Лента", "Магнит ГМ", "ОКЕЙ", "Metro C&C"],
    datasets: isData,
  };

  const options = {
    responsive: true,
    indexAxis: "x",
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
        },
      },
      datalabels: {
        color: "#000",
        align: "end",
        anchor: "center",
        formatter: (value) => { return value > 0 ? value : "" },
        offset: -3,
      },
    },
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Line
          data={data}
          options={options}
          style={{
            cursor: "pointer",
            maxWidth: "75vw",
            maxHeight: "60vh"
          }}
        />
      </div>
    </div>
  );
}

export default App;
