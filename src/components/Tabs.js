import React, { useEffect, useState } from "react";
import Tab from "./Tab";
import "./Tabs.css";
import "./Chart";
import { HOUR, MINUTE, ALL_TABS } from "../consts";

const convertSelectedPeriodToIndex = (selectedTimePeriod) => {
  const index = ALL_TABS.findIndex(({ period, percision }) => {
    return (
      selectedTimePeriod.period === period &&
      selectedTimePeriod.percision === percision
    );
  });

  if (index === -1) {
    throw "Something is wrong with selectedTimePeriod it doesn't match any element in ALL_TABS";
  }
  return index;
};

const Tabs = ({ selectedTimePeriod, setSelectedTimePeriod }) => {
  const handleTabSelection = (index) => {
    const timePeriod = ALL_TABS[index];
    setSelectedTimePeriod(timePeriod);
  };
  const activeTab = convertSelectedPeriodToIndex(selectedTimePeriod);
  return (
    <div>
      <div className="tabs-container">
        {ALL_TABS.map((el, index) => (
          <Tab
            id={index}
            name={el.name}
            key={index}
            handleTabSelection={handleTabSelection}
            tabIsActive={activeTab === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
