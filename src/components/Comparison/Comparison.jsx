import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Comparison.css";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  with: "100%",
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: false,
      position: "nearest",
      external: function (context) {
        // Tooltip Element
        let tooltipEl = document.getElementById("chartjs-tooltip");

        // Create element on first render
        if (!tooltipEl) {
          tooltipEl = document.createElement("div");
          tooltipEl.classList.add("chartjs-tooltip");
          tooltipEl.id = "chartjs-tooltip";
          document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        const tooltipModel = context.tooltip;
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }

        // Set caret Position
        tooltipEl.classList.remove("above", "below", "no-transform");
        if (tooltipModel.yAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
          tooltipEl.classList.add("no-transform");
        }

        function getBody(bodyItem) {
          return bodyItem.lines;
        }

        // Set Text
        if (tooltipModel.body) {
          const titleLines = tooltipModel.title || [];
          const bodyLines = tooltipModel.body.map(getBody);

          let innerHtml = '<div class="chart-body">';

          titleLines.forEach(function (title) {
            innerHtml +=
              '<p class="chart-body__ttl">' + title + " Percentile</p>";
          });
          innerHtml += '<p class="chart-body__txt">Your score</p></div>';

          // let tableRoot = tooltipEl.querySelector('table');
          tooltipEl.innerHTML = innerHtml;
        }

        const position = context.chart.canvas.getBoundingClientRect();

        // Display, position, and set styles for font
        tooltipEl.style.opacity = 1;
        tooltipEl.style.position = "absolute";
        tooltipEl.style.left =
          position.left + window.pageXOffset + tooltipModel.caretX + "px";
        tooltipEl.style.top =
          position.top + window.pageYOffset + tooltipModel.caretY + "px";
        tooltipEl.style.padding =
          tooltipModel.padding + "px " + tooltipModel.padding + "px";
        tooltipEl.style.pointerEvents = "none";
      },
    },
  },
  scales: {
    x: {
      grid: {
        color: "#EBF0F5",
        display: true,
        borderDash: 2,
        // not draw border line
        drawBorder: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
        maxTicksLimit: 5,
        stepSize: 20,
        values: [0, 20, 40, 60, 80, 100],
        min: 0,
        max: 100,
      },
    },
  },
  bezierCurve: true,
};
const initLabel = [0, 20, 40, 60, 80, 100];

const Comparison = ({ percentile, modalStatus }) => {
  const [labels, setLabels] = React.useState([0, 20, 40, 60, 80, 100]);
  const [dataChart, setDataChart] = React.useState([5, 60, 30, 40, 20, 5, 12]);
  let positionOfPercentile = labels.indexOf(percentile);
  useEffect(() => {
    let newLabels = [];
    let newData = [];
    for (let i = 0; i < initLabel.length; i++) {
      if (i < initLabel.length - 1) {
        // if(i == 0) {
        //   newLabels.push(0);
        //   newData.push(0);
        // }
        if (initLabel[i] < percentile && initLabel[i + 1] > percentile) {
          newLabels.push(initLabel[i]);
          newLabels.push(percentile);
          newData.push(Math.round(Math.random() * 30 + 30));
          newData.push(Math.round(Math.random() * 30 + 30));
        } else {
          newData.push(Math.round(Math.random() * 30 + 30));
          newLabels.push(initLabel[i]);
        }
      } else {
        newData.push(90);
        newLabels.push(initLabel[i]);
      }
    }
    console.log("change");
    setLabels(newLabels);
    setDataChart(newData);
  }, [percentile]);

  const data = {
    // labels,
    labels: labels.map((item) => item + "%"),
    datasets: [
      {
        label: "Dataset 1",
        data: dataChart,
        borderColor: "#438AF6",
        backgroundColor: "#438AF6",
        pointHoverRadius: 4,
        tension: 0.3,
        segment: {
          borderColor: (ctx) => {
            let percentileIndex = ctx.chart.data.labels.indexOf(
              `${percentile}%`
            );
            if (
              ctx.p0.parsed.x === percentileIndex ||
              ctx.p0.parsed.x === percentileIndex - 1
            ) {
              return "#438AF6";
            }
            return "#C8D6E5";
          },
          // only draw point at percentile position
          pointStyle: (ctx) => {
            let percentileIndex = ctx.chart.data.labels.indexOf(
              `${percentile}%`
            );
            if (
              ctx.parsed.x === percentileIndex ||
              ctx.parsed.x === percentileIndex - 1
            ) {
              return "none";
            }
            return "none";
          },
        },
        pointBackgroundColor: "#fff",
        pointHoverBackgroundColor: "#438AF6",
        pointHoverBorderColor: "#438AF6",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        spanGaps: true,
      },
    ],
  };
  return (
    <div className="comparison container">
      <div className="comparison__ttl">Comparison Graph</div>
      <div className="comparison__txt">
        <p>
          <b>You scored {percentile}% percentile</b> which is lower than the{" "}
          <br />
          average percentile 72% of all the engineers who took this assessment
        </p>
        <div className="comparison__img">
          <img src="/images/chart.png" alt="" />
        </div>
      </div>
      <div className="comparison__big-chart">
        {modalStatus && <Line redraw={true} options={options} data={data} />}
        {!modalStatus && <Line redraw={true} options={options} data={data} />}

        {/* <div className="point-blue" style={{left: `${(positionOfPercentile) * 98 + 43}px`,  bottom: `calc(${dataChart[positionOfPercentile]}px / 120 * 283 + 25px)`}}></div> */}
        <div
          className="chart-bg-1"
          style={{ left: `${(positionOfPercentile - 1) * 98 + 47}px` }}
        ></div>
        <div className="chart-bg-2"></div>
      </div>
    </div>
  );
};

export default Comparison;
