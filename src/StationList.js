import React from "react";

function StationList({ stations, onStationClick, lineColor }) {
  return (
    <div>
      <h3>選擇所在地</h3>
      <div className="stationContainer">
        {stations.map((station) => (
          <div
            id={station.code}
            key={station.code}
            onClick={() => onStationClick(station)}
            className="stationButton"
            style={{
              backgroundColor: lineColor,
            }}
          >
            {station.chinese}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StationList;
