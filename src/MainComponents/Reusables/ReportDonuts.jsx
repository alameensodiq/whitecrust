import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function ReportDonuts({ data }) {
  //  const series = data?.subscriptionPlan((item) => item.value)
  const series = data
    ? [
        data?.intra_transfer,
        data?.inter_transfer

        // data?.total_airtime_amount,
        // data?.total_electricity_amount
      ]
    : [0, 0];

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
      colors: ["#263BD4", "#00D2FF"]
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

export default ReportDonuts;
