import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function Donuts({ data = {} }) {
  //  const series = data?.subscriptionPlan((item) => item.value)
  const series = [
    data?.total_airtime_amount || 0,
    data?.total_cable_amount || 0,
    data?.total_data_amount || 0,
    data?.total_electricity_amount || 0
  ];

  const options = {
    chart: {
      width: 380,
      type: "donut"
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          labels: {
            show: true
          }
        }
      }
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      lineCap: "butt"
    },
    fill: {
      colors: [
        "rgba(246, 141, 43, 1)",
        "rgba(244, 167, 157, 1)",
        "rgba(52, 75, 253, 1)",
        "rgba(255, 210, 0, 1)"
      ]
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

  return <Chart options={options} series={series} type="donut" height={200} />;
}

export default Donuts;
