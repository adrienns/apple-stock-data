import React, { useState } from "react";
import moment from "moment";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const apiDataToChartData = (apiData) => {
  const convertedData = apiData.map((el, index) => {
    const timeStamp = moment(el.Date).unix() * 1000;
    return [timeStamp, el.Open, el.High, el.Low, el.Close];
  });
  return convertedData;
};

const Chart = ({ data }) => {
  const options = {
    rangeSelector: {
      enabled: false,
    },

    title: {
      text: "AAPL Stock Price",
    },

    series: [
      {
        type: "candlestick",
        name: "AAPL Stock Price",
        data: apiDataToChartData(data),
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"stockChart"}
      />
    </div>
  );
};

export default Chart;
