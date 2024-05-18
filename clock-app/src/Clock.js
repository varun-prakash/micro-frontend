import React, { useState, useEffect } from "react";
import "./Clock.css"; // Import the CSS file

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timerId);
  }, []);

  const getRotationDegrees = (unit, max) => (unit / max) * 360 + 90;

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegrees = getRotationDegrees(hours + minutes / 60, 12);
  const minuteDegrees = getRotationDegrees(minutes + seconds / 60, 60);
  const secondDegrees = getRotationDegrees(seconds, 60);

  return (
    <div className="clock">
      <div className="clock-face">
        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${hourDegrees}deg)` }}
        />
        <div
          className="hand minute-hand"
          style={{ transform: `rotate(${minuteDegrees}deg)` }}
        />
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${secondDegrees}deg)` }}
        />
        <div className="center-dot" />
      </div>
    </div>
  );
};

export default Clock;
