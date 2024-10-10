import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function DoubleLineChart({ data }) {
  const series = [
    {
      //   name: "High - 2013",
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
        : Array(12).fill(0)
    }
    // {
    //   //   name: "Low - 2013",
    //   data: [10, 30, 70, 30, 90, 50, 60]
    // }
  ];

  const options = {
    // "#E9EDF5",
    colors: ["#263BD4"],
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
      categories: [
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
      ]
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
