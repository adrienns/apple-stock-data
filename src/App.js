import { useEffect, useState } from "react";
import "./App.css";
import Tabs from "./components/Tabs";
import axios from "axios";
import Chart from "./components/Chart";

import { HOUR, MINUTE, ALL_TABS } from "./consts";

function App() {
  const [data, setData] = useState([]);
  const [selectedTimePeriod, setSelectedTimePeriod] = useState({
    period: 1,
    percision: MINUTE,
  });

  const fetch5minutesData = async () => {
    try {
      URL = `https://www.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=${selectedTimePeriod.period}&Precision=${selectedTimePeriod.percision}&StartTime=8/28/2020%2016:0&EndTime=9/4/2020%2023:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;
      const resp = await axios.get(URL);
      setData(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch5minutesData();
  }, [selectedTimePeriod]);
  console.log(selectedTimePeriod);
  return (
    <div className="app-container">
      <h2 className="apple-inc-text">Apple Inc</h2>
      <h4 className="apple-stock-data-text">Apple Stock Data Chart</h4>
      <Tabs
        setSelectedTimePeriod={setSelectedTimePeriod}
        selectedTimePeriod={selectedTimePeriod}
      />
      <Chart data={data} />
    </div>
  );
}

export default App;
