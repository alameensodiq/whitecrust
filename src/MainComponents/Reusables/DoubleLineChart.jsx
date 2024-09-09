import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function DoubleLineChart() {
  const series = [
    {
      //   name: "High - 2013",
      data: [40, 80, 30, 10, 70, 20, 10]
    },
    {
      //   name: "Low - 2013",
      data: [10, 30, 70, 30, 90, 50, 60]
    }
  ];

  const options = {
    colors: ["#E9EDF5", "#263BD4"],
    chart: {
      height: 220,
      type: "line",
      toolbar: {
        show: false
      }
    },
    grid: {
      show: true
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      width: 3
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
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
    },
    legend: {
      show: false // Set this to false to hide legend labels
    }
  };

  return <Chart options={options} series={series} type="line" height={290} />;
}
export default DoubleLineChart;
