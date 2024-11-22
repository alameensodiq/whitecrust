import React from "react";
import Chart from "react-apexcharts";

function AreaChart({ data }) {
  const getDayOfWeek = (dateString) => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date(dateString);
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  };

  const series = [
    {
      name: "series1",
      data: [20, 30, 50, 89, 88, 77, 44]
      //   data: data?.productivityAnalysis?.map((item) => item?.productive)
    }
  ];

  const options = {
    colors: ["#263BD4"],
    chart: {
      height: 220,
      type: "area",
      toolbar: {
        show: false
      },
      responsive: [
        {
          breakpoint: 768, // Adjust for smaller screens
          options: {
            chart: {
              width: "100%" // Let chart occupy the entire container width
            }
          }
        }
      ]
    },
    grid: {
      show: true
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 100
    },
    tooltip: {
      x: {
        formatter: undefined,
        title: "Title: "
      }
    }
  };

  return (
    <div className="flex flex-row w-[100%] rounded-lg">
      <Chart
        options={options}
        series={series}
        type="area"
        height={270}
        width={460}
      />
    </div>
  );
}

export default AreaChart;
