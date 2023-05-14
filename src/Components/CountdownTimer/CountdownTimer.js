import { useState, useEffect } from "react";
import "./CountdownTimer.css";
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const CountdownTimer = ({countdownTimestampMs}) => {
  const [remainingTime, setReaminingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
        updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    setReaminingTime(getRemainingTimeUntilMsTimestamp(countdown)); 

  }

  return (
   
    <div className="countdown-timer">
    <div className='new-line'>멀티캠퍼스 수료 D-Day : </div>
      <span>{remainingTime.days}</span>
      <span>days</span>
      <span className="two-numbers">{remainingTime.hours}</span>
      <span>hours</span>
      <span className="two-numbers">{remainingTime.minutes}</span>
      <span>minutes</span>
      <span className="">{remainingTime.seconds}</span>
      <span>seconds</span>
    </div>
  );
};

export default CountdownTimer;
