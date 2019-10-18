import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  Summer: {
    text: "Let's hit the beach!!",
    iconName: "sun"
  },
  Winter: {
    text: "Burr, it's cold!!!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
