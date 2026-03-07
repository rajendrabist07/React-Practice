import { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);


    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours() % 12;

    const secondAngle = seconds * 6;
    const minuteAngle = minutes * 6 + seconds * 0.1;
    const hourAngle = hours * 30 + minutes * 0.5;

    const digitalHours = String(time.getHours()).padStart(2, '0');
    const digitalMinutes = String(time.getMinutes()).padStart(2, '0');
    const digitalSeconds = String(time.getSeconds()).padStart(2, '0');

    return (
        <div className="clock-wrapper">
            <div className="clock-container">

                <div className="outer-numbers">
                    {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, index) => {
                        const angle = index * 30;
                        const radian = (angle - 90) * (Math.PI / 180);
                        const radius = 220;
                        const x = Math.cos(radian) * radius;
                        const y = Math.sin(radian) * radius;

                        return (
                            <div
                                key={num}
                                className="outer-number"
                                style={{
                                    left: `calc(50% + ${x}px)`,
                                    top: `calc(50% + ${y}px)`,
                                }}
                            >
                                {num}
                            </div>
                        );
                    })}
                </div>


                <div className="clock-circle">

                    <div className="glow-ring ring-1"></div>
                    <div className="glow-ring ring-2"></div>
                    <div className="glow-ring ring-3"></div>


                    {[...Array(12)].map((_, i) => (
                        <div
                            key={`hour-${i}`}
                            className="hour-tick"
                            style={{
                                transform: `rotate(${i * 30}deg) translateY(-130px)`,
                            }}
                        ></div>
                    ))}


                    {[...Array(60)].map((_, i) => (
                        i % 5 !== 0 && (
                            <div
                                key={`min-${i}`}
                                className="minute-tick"
                                style={{
                                    transform: `rotate(${i * 6}deg) translateY(-135px)`,
                                }}
                            ></div>
                        )
                    ))}


                    <div
                        className="hand hour-hand"
                        style={{
                            transform: `rotate(${hourAngle}deg)`,
                        }}
                    >
                        <div className="hand-tip"></div>
                    </div>


                    <div
                        className="hand minute-hand"
                        style={{
                            transform: `rotate(${minuteAngle}deg)`,
                        }}
                    >
                        <div className="hand-tip"></div>
                    </div>


                    <div
                        className="hand second-hand"
                        style={{
                            transform: `rotate(${secondAngle}deg)`,
                        }}
                    >
                        <div className="second-circle"></div>
                    </div>


                    <div className="center-hub">
                        <div className="center-ring"></div>
                        <div className="center-dot"></div>
                    </div>


                    <div className="digital-time">
                        {digitalHours}:{digitalMinutes}:{digitalSeconds}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clock;