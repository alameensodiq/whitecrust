import Chart from "react-apexcharts";

function MixedLineBarChart({ color, background, data }) {
  const series = [
    {
      name: "Amount",
      type: "column",
      data: data
        ? [
            data?.find((item) => item?.month === "January")?.amount || 0,
            data?.find((item) => item?.month === "February")?.amount || 0,
            data?.find((item) => item?.month === "March")?.amount || 0,
            data?.find((item) => item?.month === "April")?.amount || 0,
            data?.find((item) => item?.month === "May")?.amount || 0,
            data?.find((item) => item?.month === "June")?.amount || 0,
            data?.find((item) => item?.month === "July")?.amount || 0,
            data?.find((item) => item?.month === "August")?.amount || 0,
            data?.find((item) => item?.month === "September")?.amount || 0,
            data?.find((item) => item?.month === "October")?.amount || 0,
            data?.find((item) => item?.month === "November")?.amount || 0,
            data?.find((item) => item?.month === "December")?.amount || 0
          ]
        : []
    }
    // {
    //   // name: "Social Media",
    //   type: "line",
    //   data: Array(12).fill(0)
    // }
  ];

  const options = {
    colors: [background],
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false
      }
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 1
      }
    },
    stroke: {
      width: [0, 1.6],
      colors: [color]
    },
    dataLabels: {
      enabled: false,
      enabledOnSeries: [1]
    },
    yaxis: {
      show: false,
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    legend: {
      show: false,
      fontSize: "11px"
    },
    fill: {
      opacity: 0.4
      //   colors: background
    }
  };

  return (
    <div>
      <div id="chart">
        <Chart options={options} series={series} type="line" height={140} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default MixedLineBarChart;
