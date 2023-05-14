import { useState } from 'react';
import './CountdownTimer.css'

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = () => {
    const [remainingTime, setReaminingTime] = useState(defaultRemainingTime)
    return(
        <div className='countdown-timer'>
            <span>{remainingTime.days}</span>
            <span>days</span>
            <span>{remainingTime.hours}</span>
            <span>hours</span>
            <span>{remainingTime.minutes}</span>
            <span>minutes</span>
            <span>{remainingTime.seconds}</span>
            <span>seconds</span>
        </div>
    )
}

export default CountdownTimer;