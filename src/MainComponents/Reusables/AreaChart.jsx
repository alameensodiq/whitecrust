import React from "react";
import Chart from "react-apexcharts";

function AreaChart({ data }) {
  // const getDayOfWeek = (dateString) => {
  //   const daysOfWeek = [
  //     "Sunday",
  //     "Monday",
  //     "Tuesday",
  //     "Wednesday",
  //     "Thursday",
  //     "Friday",
  //     "Saturday"
  //   ];
  //   const date = new Date(dateString);
  //   const dayOfWeek = daysOfWeek[date.getDay()];
  //   return dayOfWeek;
  // };

  const daysOrder = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const completeData = daysOrder.map((day) => {
    const existingDay = data?.find((item) => item.day === day);
    return existingDay || { day, count: 0 };
  });

  // Sort the data according to daysOrder (though it's already aligned here)
  const sortedData = completeData.sort(
    (a, b) => daysOrder.indexOf(a.day) - daysOrder.indexOf(b.day)
  );

  // Prepare the series data
  const series = [
    {
      name: "Activity Count",
      data: sortedData.map((item) => item.count)
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
          breakpoint: 480, // Adjust for smaller screens
          options: {
            chart: {
              width: 240
              // height: 220
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
      max: 1000
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
        // height={250}
        // width={460}
      />
    </div>
  );
}

export default AreaChart;
