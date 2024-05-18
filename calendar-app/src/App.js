import React from "react";
import "./App.css";

const App = () => {
  const currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div className="app-container">
      <div className="calendar">
        <div className="date-display">{formattedDate}</div>
      </div>
    </div>
  );
};

export default App;
